import React, { Component } from "react";

export class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["arrays", "should", "start", "at", "one"],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  filterTheString = userInput => {
    let filtered = [];
    this.state.unFilteredArray.forEach(item => {
      if (item.includes(userInput)) {
        filtered.push(item);
      }
    });

    this.setState({
      filteredArray: filtered
    });
  };

  render() {
    // console.log(this.state.userInput)
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={e => {
            return this.handleChange(e);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterTheString(this.state.userInput)}
        >
          filter
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
