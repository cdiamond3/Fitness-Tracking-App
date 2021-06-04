import React from 'react'
import FoodCard from '../Cards/FoodCard'

export default function MyWeek({ allFood }) {

    const showDay = (day) => {
        return allFood.filter(food => {
            return food.days.includes(day)
        })
    }
    //map always returns all elements trasnformed.
    //includes only returns booleans value

    const renderFilteredFoodCards = (day) => {
        return showDay(day).map(food => {
            return <FoodCard food={food} />
        })
    }

    return (
        <div>
            <div className="calander">
            <h1>MY WEEK!</h1>
            <h2>Monday</h2>
            {renderFilteredFoodCards("Monday")}
            <h2>Tuesday</h2>
            {renderFilteredFoodCards("Tuesday")}
            <h2>Wednesday</h2>
            {renderFilteredFoodCards("Wednesday")}
            <h2>Thursday</h2>
            {renderFilteredFoodCards("Thursday")}
            <h2>Friday</h2>
            {renderFilteredFoodCards("Friday")}
            <h2>Saturday</h2>
            {renderFilteredFoodCards("Saturday")}
            <h2>Sunday</h2>
            {renderFilteredFoodCards("Sunday")}
            </div>
        </div>
    )
}



