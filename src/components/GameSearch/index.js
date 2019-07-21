import React from 'react'
import { Card } from 'react-bootstrap'

class GameSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div>
        <Card>
          <Card.Body>
            <h3>Game Search</h3>
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
            <input type="text"/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameSearch;