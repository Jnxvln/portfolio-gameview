import React from 'react'
import './Game.css'

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Game state data
    };
  }

  render () {
    return (
      <div className="GAME_container">
        <img src={this.props.game.background_image} className="GAME_image" alt={this.props.game.name}/>
        <p>{this.props.game.name}</p>
      </div>
    );
  }
}

export default Game;