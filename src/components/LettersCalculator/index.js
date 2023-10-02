import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', lettersCount: 0}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      lettersCount: event.target.value.length,
    })
  }

  render() {
    const {searchInput, lettersCount} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="search-element" className="search-indication">
            Enter the phrase
          </label>
          <input
            type="text"
            id="search-element"
            className="search-input"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <p className="letters-count">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
