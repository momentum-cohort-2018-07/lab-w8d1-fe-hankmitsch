import React, { Component } from 'react'

import textOptions from './textOptions'
import TextInput from './TextInput'
import ShrinkText from './ShrinkText'
import TextOption from './TextOption'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  shrinkText () {
    let { text, options } = this.state
    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }

  setOption (option) {
    return (event) => {
      const value = event.target.checked
      console.log(value)
      const optionSet = new Set(this.state.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.setState({
        options: [...optionSet]
      })
    }
  }

  render () {
    const text = this.state.text
    const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            <TextInput text={text} updateText={this.updateText} />
          </div>
          <div className='col'>
            <ShrinkText text={text} shrunkText={shrunkText} />
          </div>
        </div>
        <div className='row options'>
          <div className='col-12'>
            <h4>Options</h4>
          </div>
          {textOptions.map((option, idx) => (
            <div key={idx} className='col-6'>
              <TextOption option={option} setOption={this.setOption(option.id)} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
