import React, { useState } from 'react'
import Badge from '../Components/Badge'

export default function FoodCards({ food, dayOfWeek }) {

    const [days, setDays] = useState([...food.days])

    const addBadge = () => {
        if (!days.includes(dayOfWeek)) {
            const newDays = [...days, dayOfWeek]
            setDays(newDays)
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body:
                    JSON.stringify({ days: newDays })
            }
            fetch(`http://localhost:3000/food/${food.id}`, options)
                .then(res => res.json())
        }
    }

    const renderBadge = () => {
        return days.map(day => {
            console.log(day)
            return <Badge className="badges" day={day} />
        })
    }
    return (
        <div id="food-card" className="food" onClick={() => addBadge()}>
            {renderBadge()}
            <h2>{food.name}</h2>
            <h3>{food.description}</h3>
            <img id="foodCardImage" alt="Pizza Pizza" src={food.image}></img>
        </div>
    )
}




