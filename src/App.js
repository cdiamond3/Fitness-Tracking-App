import './App.css';
import React, { Component } from 'react'
import FoodCardsConatiner from "./Containers/FoodCardsContainer"
import Header from './Components/Header';
import { Route } from "react-router-dom"
import MyWeek from './Components/MyWeek';

export default class App extends Component {
  state = {
    allFood: [],
    showFood: false,
    allWorkOuts: [],
    dayOfTheWeek: "",
  }

  componentDidMount() {
    fetch("http://localhost:3000/food")
      .then(res => res.json())
      .then(allFoodData => {
        this.setState({
          allFood: allFoodData,
          dayOfTheWeek: new Date().toLocaleString('en-us', { weekday: 'long' })
        })
      })
  }

  render() {
    return (
      <div id="bg">
        {/* <MyWeek allFood={this.state.allFood} /> */}
        <Header showWeek={this.showMyWeek} />
        <FoodCardsConatiner foodData={this.state.allFood} dayOfWeek={this.state.dayOfTheWeek} />
      </div>
    )
  }
}
