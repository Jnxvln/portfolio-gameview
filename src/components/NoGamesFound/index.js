import React from 'react'
import gif from './Question.gif'

function NoGamesFound (props) {
  return (
    <div>
      <h3 style={{ display: props.show ? 'block' : 'none'}}>
        <img src={gif} alt="Cannot find any games" style={{ marginRight: '15px' }}/>
        Aww shucks, I couldn't find anything!
      </h3>
    </div>
  );
}

export default NoGamesFound