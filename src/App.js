import './App.css';
import React, { Component } from 'react'
import Monday from "./Components/Monday"
import Tuesday from "./Components/Tuesday"
import Wednesday from "./Components/Wednesday"
import Thursday from "./Components/Thursday"
import Friday from "./Components/Friday"
import Saturday from "./Components/Saturday"
import Sunday from "./Components/Sunday"
import FoodCards from './Cards/FoodCards';
import Header from "./Components/Header"

export default class App extends Component {
  state={
    allFood:[],
    myMonday:[],
    myTuesday:[],
    myWednesday:[],
    myThursday:[],
  }
componentDidMount(){
  fetch("http://localhost:3000/food")
    .then(res => res.json())
    .then(allFoodData => {
      console.log(allFoodData)
      this.setState({
        allFood: allFoodData
      })
    })
  }
  
      
  render() {
    return (
      <div>
        <Header />
        <hr></hr>
      <Monday />
      <hr></hr>
      <Tuesday />
      <hr></hr>
      <Wednesday />
      <hr></hr>
      <Thursday />
      <hr></hr>
      <Friday />
      <hr></hr>
      <Saturday />
      <hr></hr>
      <Sunday />
      <hr></hr>
      <FoodCards foodData={this.state.allFood} />
      </div>
    )
  }
}
