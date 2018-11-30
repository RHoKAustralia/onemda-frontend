import React from 'react'
import SelectableButton from '../SelectableButton/index'
import './index.css'

class SelectableButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      selectedOption: ''
    }

    this.state.options = props.options
    this.state.selectedOption = props.options[0]
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div key={1} className="SelectableButtonGroup">
        {this.state.options.map((option, index) => {
          const selected = this.state.options[index] == this.state.selectedOption ? true : false
          return (
            <SelectableButton key={index} index={index} option={option} selected={selected} handleChange={this.handleChange}></SelectableButton>
          )
        })}
      </div>
    )
  }

  handleChange(key) {
    const selectedOption = this.state.options[key]
    this.setState({selectedOption: selectedOption})
    this.props.handleChange(selectedOption)
  }
}

export default SelectableButtonGroup