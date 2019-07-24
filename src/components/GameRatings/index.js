import React from 'react'
import { ProgressBar } from 'react-bootstrap'

class GameRatings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      exceptional: 0,
      recommended: 0,
      meh: 0,
      skip: 0
    }
    // 'this' Event Bindings
    this.getGameRatings = this.getGameRatings.bind(this);
  }

  componentDidMount () {
    this.getGameRatings(this.props.game)
  }

  getGameRatings (game) {
    let ratings = game.basic.ratings;
    // console.log('Test: ', ratings.filter(rating => rating.title === 'exceptional')[0].title)
    if (ratings) {
      this.setState({
        exceptional: ratings.filter(rating => rating.title === 'exceptional')[0] ? ratings.filter(rating => rating.title === 'exceptional')[0].percent : null,
        recommended: ratings.filter(rating => rating.title === 'recommended')[0] ? ratings.filter(rating => rating.title === 'recommended')[0].percent : null,
        meh: ratings.filter(rating => rating.title === 'meh')[0] ? ratings.filter(rating => rating.title === 'meh')[0].percent : null,
        skip: ratings.filter(rating => rating.title === 'skip')[0] ? ratings.filter(rating => rating.title === 'skip')[0].percent : null
      })
    } else {
      // there are no ratings!
    }
  }

  render () {
    return (
      <div>
        <ProgressBar>
          <ProgressBar variant="success" now={ this.state.exceptional } label={ `${this.state.exceptional}%` } key={1} />
          <ProgressBar variant="info" now={ this.state.recommended } label={ `${this.state.recommended}%` } key={2} />
          <ProgressBar variant="warning" now={ this.state.meh } label={ `${this.state.meh}%` } key={3} />
          <ProgressBar variant="danger" now={ this.state.skip } label={ `${this.state.skip}%` } key={4} />
        </ProgressBar>
        <br/>
        <div>
          <span style={{ marginRight: '10px' }}>Legend:</span>
          <span className="badge badge-success">Exceptional</span>
          <span className="badge badge-info">Recommended</span>
          <span className="badge badge-warning">Meh</span>
          <span className="badge badge-danger">Skip</span>
        </div>
      </div>
    );
  }
}

export default GameRatings;