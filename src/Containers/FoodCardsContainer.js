import React from 'react'
import FoodCards from '../Cards/FoodCards'

export default function FoodItemsContainer(props) {

    const renderFoodCards = () => {
        return props.foodData.map(food => {
            console.log(food)
            return <FoodCards food={food} dayOfWeek={props.dayOfWeek} />
        })
    }


    return (
        <div>
            {renderFoodCards()}
        </div>
    )
}
