import React from 'react'
import FoodCard from '../Cards/FoodCard'

export default function MyWeek({ allFood }) {

    const showMyWeek = () => {
        return allFood.filter(food => {
            return food.days.includes("Monday")
        })
    }

    //map always returns all elements trasnformed.
    //includes only returns booleans value

    const renderFilteredFoodCards = () => {
        return showMyWeek().map(food => {
            return <FoodCard food={food} />
        })
    }

    return (
        <div>
            <h1>Monday</h1>
            {renderFilteredFoodCards()}
        </div>
    )
}



