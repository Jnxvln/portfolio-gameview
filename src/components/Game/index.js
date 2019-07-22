import React from 'react'
import './Game.css'

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Game state data
    };

    // 'this' Event Bindings
    this.handleGameChosen = this.handleGameChosen.bind(this);
  }

  handleGameChosen (game) {
    this.props.onChoose(game);
  }

  render () {
    return (
      <div className="GAME_container">
        <img src={this.props.game.background_image} className="GAME_image" alt={this.props.game.name} onClick={ () => {
          this.props.onChoose(this.props.game);
        }}/>
        <p>{this.props.game.name}</p>
      </div>
    );
  }
}

export default Game;