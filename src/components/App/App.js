import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GameSearch from '../GameSearch'
import GameResults from '../GameResults'
import GameDetail from '../GameDetail'
import SiteFooter from '../SiteFooter'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // state data
      gamesFound: [],
      gameChosen: undefined,
    };

    // 'this' Event Bindings
    this.handleGamesFound = this.handleGamesFound.bind(this);
    this.handleGameChosen = this.handleGameChosen.bind(this);
  }

  handleGamesFound (games) {
    this.setState({
      gamesFound: games
    }, () => {
      console.log('[inside App component] Games Found: ', this.state.gamesFound);
    })
  }

  handleGameChosen (game) {
    // Set gameChosen to the game the user selects
    this.setState({
      gameChosen: game
    }, () => console.log('[app.js] Game Chosen: ', this.state.gameChosen.name))
  }

  render () {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid">
                <h1 className="text-center">Gameview</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <GameSearch returnGamesFound={ this.handleGamesFound }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <GameResults games={ this.state.gamesFound } gameChosen={ this.handleGameChosen }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <GameDetail game={ this.state.gameChosen }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <SiteFooter/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
