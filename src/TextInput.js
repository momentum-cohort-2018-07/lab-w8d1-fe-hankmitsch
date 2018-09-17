import React, { Component } from 'react'

class TextInput extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={this.updateText}
          value={this.props.text} />
        <div>
          {this.state.text && `${this.state.text.length} characters`}
        </div>
      </div>
    )
  }
}

export default TextInput
