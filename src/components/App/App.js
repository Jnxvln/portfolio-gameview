import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GameSearch from '../GameSearch'
import GameResults from '../GameResults'
import GameDetail from '../GameDetail'
import SearchEmpty from '../SearchEmpty'
import SiteFooter from '../SiteFooter'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // state data
      gamesFound: [],
      gameChosen: null,
      isSearchEmpty: true
    };

    // 'this' Event Bindings
    this.handleGamesFound = this.handleGamesFound.bind(this);
    this.handleGameChosen = this.handleGameChosen.bind(this);
    this.handleSearchEmpty = this.handleSearchEmpty.bind(this);
    this.handleClearGame = this.handleClearGame.bind(this);
  }

  handleClearGame (game) {
    this.setState({
      gameChosen: null
    })
  }

  handleSearchEmpty (value) {
    this.setState({
      isSearchEmpty: value
    }, () => {
      // console.log('Search empty: ', this.state.isSearchEmpty)
      if (this.state.isSearchEmpty) {
        document.querySelector('#GAMERESULTS_component').style.display = 'none';
        document.querySelector('#GAMEDETAIL_component').style.display = 'none';
      }
    })
  }

  handleGamesFound (games) {
    this.setState({
      gamesFound: games
    });
  }

  handleGameChosen (game, detailedData) {

    // Scroll to top of the page
    window.scrollTo(0, 100);

    // Hide the GameResults component
    document.querySelector('#GAMERESULTS_component').style.display = 'none';
    // Show the GameDetail component
    document.querySelector('#GAMEDETAIL_component').style.display = 'block';

    // Set gameChosen to the game the user selects
    let gameObj = null;
    if (detailedData) {
      gameObj = {
        basic: game,
        details: detailedData
      }
      this.setState({
        gameChosen: gameObj
      });
    } else {
      this.setState({
        gameChosen: game
      });
    }
  }

  render () {
    return (
      <div>
        <div id="APP_pageContainer">
          <Row>
              <Col>
                <div id="APP_header" className="jumbotron jumbotron-fluid">
                  <h1 id="APP_title" className="text-center">Gameview</h1>
                </div>
              </Col>
            </Row>
          <Container>
            <Row>
              <Col>
                <GameSearch returnGamesFound={ this.handleGamesFound } searchEmpty={ this.handleSearchEmpty }/>
              </Col>
            </Row>
            <Row>
              <Col>
                <GameResults games={ this.state.gamesFound } gameChosen={ this.handleGameChosen } value={ this.state.gameChosen } clearGame={ this.handleClearGame }/>
              </Col>
            </Row>
            <Row style={{marginBottom: '3.5rem' }}>
              <Col>
                <GameDetail game={ this.state.gameChosen } clearGame={ this.handleClearGame }/>
                <SearchEmpty show={ this.state.isSearchEmpty }/>
              </Col>
            </Row>
          </Container>
        </div>
        <Row>
          <Col>
            <SiteFooter/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
