import React from 'react'
import SelectBox2 from '../SelectBox2/index'
import './index.css'

class SelectBoxWithLabel extends React.Component {

  render() {
    const { category, value } = this.props
    return (
      <div className='SelectBox2'>
        <div className='SelectBox2Label'>
          {category}
        </div>
        <SelectBox2 options={this.props.options} handleChange={this.props.handleChange} value={value}></SelectBox2>
      </div>
    )
  }
}

export default SelectBoxWithLabel