import React from 'react'
import { Card } from 'react-bootstrap'
import Game from '../Game'
import './GameResults.css'

class GameResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
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
                      <Game game={ game }/>
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