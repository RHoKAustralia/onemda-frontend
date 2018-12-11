import React from 'react'
import './index.css'

class Date extends React.Component {
  render() {
    return (
      <input onChange={this.props.handleChange} className='Date' type="date"></input>
    )
  }
}

export default Date