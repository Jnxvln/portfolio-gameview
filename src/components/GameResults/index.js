import React from 'react'
import { Card } from 'react-bootstrap'
import Game from '../Game'
import axios from 'axios'
import './GameResults.css'

class GameResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    // 'this' Event Bindings
    this.handleGameChosen = this.handleGameChosen.bind(this);
  }

  handleGameChosen (game) {
    this.getDetailedInfo(game)
    // this.props.gameChosen(game);
  }

  async getDetailedInfo (game) {
    // Try to additionally obtain info from the detailed API endpoint
    try {
      let res = await axios.get(`https://api.rawg.io/api/games/${game.slug}`)
      let detailedData = {
        website: res.data.website,
        description: res.data.description_raw
      }
      if (detailedData.description) {
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
      <div>
        <Card className="mt-4">
          <Card.Body>
            <h3>Game Results</h3>
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameResults;