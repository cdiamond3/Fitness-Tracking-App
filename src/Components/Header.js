import React from 'react'

export default function Monday(props) {
    return (
        <div>
            <h1>My Fitness Tracker</h1>
            <button 
            value="See"
            onClick={() => props.toggleFoodCards("show")}>Show Meals</button>
            <button>Add A Meal</button>
        </div>
    )
}