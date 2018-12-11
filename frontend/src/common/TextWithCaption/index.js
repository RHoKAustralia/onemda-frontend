import React from 'react'
import './index.css'

class TextWithCaption extends React.Component {
  render() {
    return (
      <div><span className='Bold'>{this.props.heading}</span> - {this.props.text}</div>
    )
  }
}

export default TextWithCaption