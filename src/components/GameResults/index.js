import React from 'react'
import { Card } from 'react-bootstrap'

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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameResults;