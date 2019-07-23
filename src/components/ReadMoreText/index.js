import React from 'react'

class ReadMoreText extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {    
    return (
      <div>
        <p className="READMORETEXT_text">
          { this.props.text }
        </p>
      </div>
    );
  }
}

export default ReadMoreText;