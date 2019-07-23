import React from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

class GameDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: '',
      website: ''
    };
  }

  render () {
    return (
      <div>
        <Card className="mt-4">
          <Card.Body>
            <h3>Detail Component</h3>
            {
              this.props.game && <div>
                <p>{ this.props.game.basic.name }</p>
                <p>Released: { this.props.game.basic.released }</p>
                <p>Find it on: { this.props.game.basic.stores.map((store, index) => {
                  if (index < this.props.game.basic.stores.length-1) {
                    return store.store.name + ', ';
                  } else {
                    return store.store.name
                  }
                })}</p>

                <p>Play it on: { this.props.game.basic.platforms.map((platform, index) => {
                  if (index < this.props.game.basic.platforms.length-1) {
                    return platform.platform.name + ', ';
                  } else {
                    return platform.platform.name
                  }
                })}</p>

                <p>Genres: { this.props.game.basic.genres.map((genre, index) => {
                  if (index < this.props.game.basic.genres.length-1) {
                    return genre.name + ', ';
                  } else {
                    return genre.name
                  }
                })}</p>

                <p>Website: <a href={ this.props.game.details.website }>{ this.props.game.details.website }</a></p>

                <p>Description: </p>
                <p>{
                  this.props.game.details.description
                }</p>
              </div>
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameDetail;