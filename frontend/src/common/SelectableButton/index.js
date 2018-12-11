import React from 'react'
import './index.css';

class SelectableButton extends React.Component {
  render() {
    const { selected, option } = this.props
    return (
      <div className={`SelectableButton ${selected ? 'Selected' : ''}`} onClick={this.handleChange.bind(this)}>
        {option}
      </div>
    )
  }

  handleChange() {
    this.props.handleChange(this.props.index)
  }
}

export default SelectableButton