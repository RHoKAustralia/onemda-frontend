import React from 'react'

class SelectBox2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { options } = this.props
    return (
      <select className='SelectBox2SelectBox' onChange={this.props.handleChange}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
      </select>
    )
  }
}

export default SelectBox2