import React from 'react'
import SelectableButtonGroup from '../../common/SelectableButtonGroup/index'
import './index.css'

class SelectableButtonGroupWithLabel extends React.Component {
  render() {
    return (
      <div className="SelectableButtonGroupWithLabel">
        <div className='SelectableButtonGroupLabel'>
          {this.props.label}
        </div>
        <div className='SelectableButtonGroupButtons'>
          <SelectableButtonGroup handleChange={this.props.handleChange} options={this.props.options}></SelectableButtonGroup>
        </div>
      </div>
    )
  }
}

export default SelectableButtonGroupWithLabel