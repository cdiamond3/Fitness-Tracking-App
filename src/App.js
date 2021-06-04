import './App.css';
import React, { Component } from 'react'
import FoodCardsConatiner from "./Containers/FoodCardsContainer"
import Header from './Components/Header';
import MyWeek from "./Components/MyWeek"
import { Route } from "react-router-dom"

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
        <Header />
        <Route
          exact
          path="/"
          render={(routerprops) => <FoodCardsConatiner foodData={this.state.allFood} dayOfWeek={this.state.dayOfTheWeek} />}
        />
        <Route path="/myweek" render={(routerProps) => <MyWeek allFood={this.state.allFood} />} />
      </div>

    )
  }
}
