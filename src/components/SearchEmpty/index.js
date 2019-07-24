import React from 'react'
import smiley from './idea.gif'
import './SearchEmpty.css'

function SearchEmpty (props) {
  return (
    <div className="SEARCHEMPTY_message">
      { props.show && <div>
          <img src={smiley} alt="Cannot find any games"/>
          <span>Hm? Try searching for a game</span>
        </div> 
      }
    </div>
  );
}

export default SearchEmpty;