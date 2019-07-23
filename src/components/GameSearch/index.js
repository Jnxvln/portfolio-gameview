import React from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

class GameSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      maxGamesToFetch: 5,
      searchQuery: '',
      simpleEndpoint: `https://api.rawg.io/api/games?page_size=${this.maxGamesToFetch}&search=`,
      detailEndpoint: 'https://api.rawg.io/api/games/',
      gamesFound: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = event => {
    // Fetch the list of games as the user types
    this.setState({
      searchQuery: event.target.value 
    }, () => {
      // Hide GameDetail component when searching for a game (but make sure GameResults is showing)
      document.querySelector('#GAMEDETAIL_component').style.display = 'none';
      document.querySelector('#GAMERESULTS_component').style.display = 'block';


      // Encode the user's search query
      let encQuery = encodeURI(this.state.searchQuery)
      
      // Fetch all games matching searchQuery and store in gamesFound
      axios.get(`https://api.rawg.io/api/games?page_size=${this.state.maxGamesToFetch}&search=${encQuery}`).then(res => {
        this.setState({
          gamesFound: res.data.results
        }, () => {
          this.props.returnGamesFound(this.state.gamesFound);
        })
      })
    });
  }

  render () {
    return (
      <div>
        <Card>
          <Card.Body>
            <h3>Game Search</h3>
            <select id="GAMESEARCH_gamesToView">
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