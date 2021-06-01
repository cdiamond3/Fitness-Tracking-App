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

export default class App extends Component {
  state={
    allFood:[],
    myMonday:[],
    myTuesday:[],
    myWednesday:[],
    myThursday:[],
  }
componentDidMount(){
    fetch("http://taco-randomizer.herokuapp.com/")
      .then(res => res.json())
      .then(foodItems => {
        console.log(foodItems)
        this.setState({allFood: foodItems})
      })
  }
  
      
  render() {
    return (
      <div>
        <h1> My Fitness Week </h1>
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
      <FoodCards food={this.state.allFood}/> All Foods:
      </div>
    )
  }
}
