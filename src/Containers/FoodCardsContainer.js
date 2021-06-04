import React from 'react'
import FoodCards from '../Cards/FoodCard'

export default function FoodItemsContainer(props) {

    const renderFoodCards = () => {
        return props.foodData.map(food => {
            return <FoodCards food={food} dayOfWeek={props.dayOfWeek} />
        })
    }
    
    return (
        <div>
            <div className="big-container">
            {renderFoodCards()}
            </div>
        </div>
    )
}
