import React, { Component } from 'react'

class FilterObject extends Component {
  constructor(){
    super();
    this.state = {
      unFilteredArray: [{key: true, age: 21},{key: false, color: 'green'},{key: true, canVote: true}],
      userInput: '',
      filteredArray: []
    }
  }

  handleClick = (e)=>{
    this.setState({
      userInput: e.target.value
    })
  }

  filterTheObject = ()=>{
    console.log('from filterTheObject method')
    let filtered = this.state.unFilteredArray.filter((item) => {
      let userInput = this.state.userInput;
      return item[userInput]});
// bracket notation because in dot notation, filter will look for item.userInput LITERALLY
    console.log(filtered)
    this.setState({
      filteredArray: filtered
    })
  }
  // logic above can only work with TRUTHYV values


  /// code below has .hasOwnProperty method, which can be USEFUL

  // filterEmployees(prop) {
  //   var employees = this.state.employees;
  //   var filteredEmployees = [];
    
  //   for ( var i = 0; i < employees.length; i++ ) {
  //     if ( employees[i].hasOwnProperty(prop) ) {
  //       filteredEmployees.push(employees[i]);
  //     }
  //   }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input type="text" className="inputLine" onChange={e=>this.handleClick(e)}/>
        <button className="confirmationButton" onClick={()=>this.filterTheObject()}>filter!</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject
