import React, { Component } from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import Subtraction from '../Topics/Subtraction'

class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <p>hello, world</p>
        <EvenAndOdd/>
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        <Subtraction />
      </div>
    )
  }
}

export default TopicBrowser
