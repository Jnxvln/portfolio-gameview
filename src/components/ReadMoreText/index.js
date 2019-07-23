import React from 'react'

class ReadMoreText extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      readMore: false,
      moreOrLess: 'More'
    };

    // 'this' Event Bindings
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore () {
    this.setState({
      readMore: !this.state.readMore
    }, () => {
      if (this.state.readMore) {
        this.setState({
          moreOrLess: 'Less'
        })
      } else {
        this.setState({
          moreOrLess: 'More'
        })
      }
    })
  }

  render () {    
    return (
      <div>
        <p className="READMORETEXT_text">
          {
            this.state.readMore === false && this.props.text.split(' ', this.props.limit).map((word, index) => {
            return <span key={index}>
              {word + ' '}
            </span>
            })
          }
          {
            this.state.readMore === true && <span>{this.props.text}</span>
          }
          <button type="button" onClick={ this.toggleReadMore }>Read { this.state.moreOrLess }</button>
        </p>
      </div>
    );
  }
}

export default ReadMoreText;