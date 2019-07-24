import React from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import './GameSearch.css'

class GameSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      maxGamesToFetch: 5,
      searchQuery: '',
      gamesFound: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeMaxGames = this.handleChangeMaxGames.bind(this);
  }

  componentDidMount () {
    // Add focus to search field when component mounts
    document.querySelector('#GAMESEARCH_search').focus();
  }

  handleSearch = event => {

    // Fetch the list of games as the user types
    this.setState({
      searchQuery: event.target.value 
    }, () => {

      // If search field is empty, display a message
      if (this.state.searchQuery === '' || this.state.searchQuery === null || this.state.searchQuery === undefined) {
        this.props.searchEmpty(true);
      } else {
        this.props.searchEmpty(false);
      }

      // Hide GameDetail component when searching for a game (but make sure GameResults is showing)
      document.querySelector('#GAMEDETAIL_component').style.display = 'none';
      document.querySelector('#GAMERESULTS_component').style.display = 'block';


      // Encode the user's search query
      let encQuery = encodeURI(this.state.searchQuery)
      
      let config = {
        headers: { 'User-Agent': 'axios/0.19.0' }
      }
      
      // Fetch all games matching searchQuery and store in gamesFound
      axios.get(`https://api.rawg.io/api/games?page_size=${this.state.maxGamesToFetch}&search=${encQuery}`, config).then(res => {
        // console.log('Response: ', res);
        this.setState({
          gamesFound: res.data.results
        }, () => {
          this.props.returnGamesFound(this.state.gamesFound);
        })
      })
    });
  }

  handleChangeMaxGames (event) {
    this.setState({
      maxGamesToFetch: event.target.value
    })
  }

  render () {
    return (
      <div>
        <Card id="GAMESEARCH_card">
          <Card.Body>
            <h3 id="GAMESEARCH_title">Search for a Game</h3>
            <label id="GAMESEARCH_resultsLabel">Results: </label>
            <select id="GAMESEARCH_gamesToView" value={ this.state.maxGamesToFetch } onChange={ this.handleChangeMaxGames }>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
            <input type="text" id="GAMESEARCH_search" value={ this.state.searchQuery } onChange={ this.handleSearch }/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameSearch;