import React from 'react'
import { Card } from 'react-bootstrap'
import ReadMoreText from '../ReadMoreText'
import GameRatings from '../GameRatings'
import './GameDetail.css'

class GameDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      website: '',
      game: null,
      gameDidLoad: undefined
    };

    // 'this' Event Bindings
    this.handleBackToResults = this.handleBackToResults.bind(this);
    this.showVideoOrImage = this.showVideoOrImage.bind(this);
  }

  handleBackToResults () {
    // Erase the selected game
    this.props.clearGame();
    // Hide GameDetail component
    document.querySelector('#GAMEDETAIL_component').style.display = 'none';
    // Show GameResults component
    document.querySelector('#GAMERESULTS_component').style.display = 'block';
  }

  showVideoOrImage (game) {
    if (game.basic && game.basic.clip) {
      return <video id="GAMEDETAIL_video" controls>
        <source src={game.basic.clip.clip}/>
      </video>
    } else {
      return <img id="GAMEDETAIL_mainImage" src={game.basic && game.basic.background_image} alt={game.basic && game.basic.name}/>
    }
  }

  render () {
    return (
      <div id="GAMEDETAIL_component">
        <Card className="mt-4">
          <Card.Body>
            <button type="button" id="GAMEDETAIL_backButton" onClick={ this.handleBackToResults }>Back to Results</button>
            {
              this.props.game && this.props.game.basic &&
              <div>
                <div className="GAMEDETAIL_grid">
                  <div className="GAMEDETAIL_grid_left">
                    <h3>{ this.props.game.basic.name ? this.props.game.basic.name : 'N/A' }</h3>
                    <p>Released: { this.props.game.basic.released ? this.props.game.basic.released : 'N/A' }</p>
                    <p>Find it on: { this.props.game.basic.stores ? this.props.game.basic.stores.map((store, index) => {
                      if (index < this.props.game.basic.stores.length-1) {
                        return store.store.name + ', ';
                      } else {
                        return store.store.name
                      }
                    }) : 'N/A' }</p>

                    <p>Play it on: { this.props.game.basic.platforms ? this.props.game.basic.platforms.map((platform, index) => {
                      if (index < this.props.game.basic.platforms.length-1) {
                        return platform.platform.name + ', ';
                      } else {
                        return platform.platform.name
                      }
                    }) : 'N/A' }</p>

                    <p>Genres: { this.props.game.basic ? this.props.game.basic.genres.map((genre, index) => {
                      if (index < this.props.game.basic.genres.length-1) {
                        return genre.name + ', ';
                      } else {
                        return genre.name
                      }
                    }) : 'N/A' }</p>

                    <p>Website: 
                      {
                        this.props.game.details.website ? <a href={ this.props.game.details.website } target="_blank" rel="noopener noreferrer">{ this.props.game.details.website }</a> : <span> N/A</span>
                      }
                    </p>

                    {/* GAME RATINGS */}
                    <p>Ratings: </p>
                    <div>
                      <GameRatings game={this.props.game} />
                    </div>

                  </div> {/* end of LEFT grid */ }

                  {/* VIDEO OR PHOTO DISPLAY */}
                  <div className="GAMEDETAIL_grid_right">
                    {/* Show the video OR an image if the video isn't available */}
                    {
                      this.showVideoOrImage(this.props.game)
                    }
                  </div>

                </div>

                {/* DESCRIPTION */}
                <div className="GAMEDETAIL_description">
                  <p>Description: </p>
                  <ReadMoreText limit={50} text={ this.props.game.details && this.props.game.details.description }/>
                </div>

                {/* PHOTOS */}
                <ul className="GAMEDETAIL_photos">
                    {
                      this.props.game.basic && this.props.game.basic.short_screenshots.map((photo, index) => {
                        return <li key={index}>
                          <img src={photo.image} alt={this.props.game.basic.name} className="GAMEDETAIL_image"/>
                        </li>
                      })
                    }
                </ul>

              </div> || <div>
                <p>Hmm...sorry, we could not retrieve any information about this game! Try another one!</p>
              </div>
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameDetail;