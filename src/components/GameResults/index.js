import React from 'react'
import { Card } from 'react-bootstrap'
import Game from '../Game'
import NoGamesFound from '../NoGamesFound'
import axios from 'axios'
import './GameResults.css'

class GameResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    // 'this' Event Bindings
    this.handleGameChosen = this.handleGameChosen.bind(this);
    this.handleBackToGame = this.handleBackToGame.bind(this);
  }

  handleGameChosen (game) {
    this.getDetailedInfo(game)
  }

  handleBackToGame () {
    // Hide GameResults component
    document.querySelector('#GAMERESULTS_component').style.display = 'none';
    // Show GameDetail component
    document.querySelector('#GAMEDETAIL_component').style.display = 'block';
  }

  async getDetailedInfo (game) {
    // Try to additionally obtain info from the detailed API endpoint
    try {
      let res = await axios.get(`https://api.rawg.io/api/games/${game.slug}`)
      let detailedData = {
        website: res.data.website,
        description: res.data.description_raw
      }
      if (detailedData.description || detailedData.website) {
        // Detailed API information gathered, return augmented game object
        this.props.gameChosen(game, detailedData);
      } else {
        // Could not gather information from detailed API endpoint, return basic information only
        this.props.gameChosen(game);
      }
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div id="GAMERESULTS_component">
        <Card className="mt-4">
          <Card.Body>
            {
              /* If a game has previously been chosen, render a "Back To Game" button */
              this.props.value && <button type="button" onClick={ this.handleBackToGame }>Back to Game</button>
            }

            <ul className="GAMERESULTS_gamesList">
              {
                this.props.games.map((game, index) => {
                  return (
                    <li key={index}>
                      <Game game={ game } onChoose={ this.handleGameChosen }/>
                    </li>
                  )
                })
              }
            </ul>
            <NoGamesFound show={ this.props.games.length === 0 }/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameResults;