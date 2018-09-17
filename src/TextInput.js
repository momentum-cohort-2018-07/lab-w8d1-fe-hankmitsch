import React, { Component } from 'react'

class TextInput extends Component {
  render () {
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={this.props.updateText}
          value={this.props.text} />
        <div>
          {this.props.text && `${this.props.text.length} characters`}
        </div>
      </div>
    )
  }
}

export default TextInput
