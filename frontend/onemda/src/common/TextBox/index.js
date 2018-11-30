import React from 'react'
import './index.css'

class TextBox extends React.Component {
  render() {
    return (
      <textarea placeholder='comments...' className='TextBox' onChange={this.props.handleChange}></textarea>
    )
  }
}

export default TextBox