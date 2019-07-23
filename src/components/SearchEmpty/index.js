import React from 'react'
import './SearchEmpty.css'

function SearchEmpty (props) {
  return (
    <p className="SEARCHEMPTY_message">
      { props.show && <span>Type the name of any game to begin</span> }
    </p>
  );
}

export default SearchEmpty;