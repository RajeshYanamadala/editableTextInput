import {Component} from 'react'

import './index.css'

class TextInput extends Component {
  state = {textInputValue: '', showButton: true, submitValue: []}

  onChangeInputValue = event => {
    this.setState({textInputValue: event.target.value})
  }

  onClickSaveBtn = () => {
    const {textInputValue} = this.state
    this.setState({submitValue: textInputValue, showButton: false})
  }

  onClickEditBtn = () => {
    this.setState({showButton: true})
  }

  renderSaveInput = () => {
    const {textInputValue} = this.state
    console.log(textInputValue)
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeInputValue}
          value={textInputValue}
        />
        <div>
          <button type="button" onClick={this.onClickSaveBtn}>
            save
          </button>
        </div>
      </div>
    )
  }

  renderEditInput = () => {
    const {submitValue} = this.state
    console.log(submitValue)

    return (
      <div>
        <p>{submitValue} </p>
        <button type="submit" onClick={this.onClickEditBtn}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {showButton} = this.state

    return (
      <div className="edit-container">
        <h1>Editable Text Input</h1>
        {showButton ? this.renderSaveInput() : this.renderEditInput()}
      </div>
    )
  }
}

export default TextInput
