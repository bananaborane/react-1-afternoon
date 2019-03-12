import React, { Component } from 'react'
class Palindrome extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange = (e)=>{
    this.setState({
      userInput: e.target.value
    })
  }

  checkPalindrome = (input)=>{
    let original = input
    let originalReversed = input.split('').reverse().join('');

    if ( original === originalReversed ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input type="text" className="inputLine" onChange={e=>this.handleChange(e)}/>
        <button className="confirmationButton" onClick={()=>{return this.checkPalindrome(this.state.userInput)}}>palindrome?</button>
        <span className="resultsBox"> the result is: {this.state.palindrome}</span>
      </div>
    )
  }
}


export default Palindrome
