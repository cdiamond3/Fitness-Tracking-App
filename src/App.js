import './App.css';
import React, { Component } from 'react'
import FoodCardsConatiner from"./Containers/FoodCardsContainer"
import Header from './Components/Header';

export default class App extends Component {
  state={
    allFood:[],
    showFood: false,
    allWorkOuts:[],
    dayOfTheWeek: "",
  }
componentDidMount(){
  fetch("http://localhost:3000/food")
    .then(res => res.json())
    .then(allFoodData => {
      console.log(allFoodData)
      this.setState({
        allFood: allFoodData,
        dayOfTheWeek: new Date().toLocaleString('en-us', {  weekday: 'long' })
      })
    })
    // fetch("http://localhost:3000/Workouts")
    //   .then(res => res.json())
    //   .then(allWorkOut => {
    //     this.setState({
    //       allWorkOuts: allWorkOut,
    //     })
    //   })
  }

  render() {
    return (
      <div>
      <Header />
      <FoodCardsConatiner foodData={this.state.allFood} dayOfWeek={this.state.dayOfTheWeek} />
      </div>
    )
  }
}
