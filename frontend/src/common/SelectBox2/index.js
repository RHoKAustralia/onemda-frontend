import React from 'react'

class SelectBox2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { options, value } = this.props
    return (
      <select className='SelectBox2SelectBox' onChange={this.props.handleChange} value={value}>
        {options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        })}
      </select>
    )
  }
}

export default SelectBox2