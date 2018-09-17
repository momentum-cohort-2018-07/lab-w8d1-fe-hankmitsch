import React, { Component } from 'react'

class TextOption extends Component {
  render () {
    const option = this.props.option
    return (
      <div>
        <label htmlFor={option.id}>
          <input type='checkbox' id={option.id} onChange={this.props.setOption} /> {' ' + option.label}
        </label>
      </div>
    )
  }
}

export default TextOption
