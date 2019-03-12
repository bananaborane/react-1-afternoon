import React, { Component } from 'react';

export default class Subtraction extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      subtraction: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: val*1 });
  }

  updateNumber2(val) {
    this.setState({ number2: val*1 });
  }

  subtract(num1, num2) {
    this.setState({ subtraction: num1 - num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Subtraction </h4>
        <p>Subtracts the first number with the second number.</p>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.subtract(this.state.number1, this.state.number2) }> Minus them down! </button>
        <span className="resultsBox"> Subtraction: {this.state.subtraction} </span>
      </div>
    )
  }
}