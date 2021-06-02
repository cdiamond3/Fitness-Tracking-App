import React, { useState } from 'react'
import Badge from '../Components/Badge'

export default function FoodCards({ food, dayOfWeek }) {

    const [days, setDays] = useState([...food.days])

    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:
            JSON.stringify({ days: [...days] })
    }

    const addBadge = () => {
        if (!days.includes(dayOfWeek)) {
            setDays(days => [
                console.log(days),
                ...days, dayOfWeek
            ])
            fetch(`http://localhost:3000/food/${food.id}`, options)
                .then(res => res.json())
        }  
    }

    const renderBadge = () => {
        return days.map(day => {
            console.log(day)
            return <Badge className="badges" day={day} />
        })
        // for (let i = 0; i < days.length; i++) {
        //     switch (days[i]) {
        //         case "Monday":
        //             console.log("Monday");
        //             let dayBadge = "M"
        //             break;
        //         case "Tuesday":
        //             <div> T </div>
        //             break;
        //         case "Wednesday":
        //             dayBadge = "W"
        //             break;
        //         case "Thursday":
        //             <> Th </>
        //             break;
        //         case "Friday":
        //             <div> F </div>
        //             break;
        //         case "Saturday":
        //             <div> S </div>
        //             break;
        //         case "Sunday":
        //             <div> Sun </div>
        //             break;
        //         default:
        //     }
        // }
    }
    return (
        <div id="food-card" className="food" onClick={() => addBadge()}>
            {renderBadge()}
            <h1>{food.name}</h1>
            <h1>{food.description}</h1>
            <img alt="Pizza Pizza" src={food.image}></img>
        </div>
    )
}




// {food.days.includes("Wednesday") ? "True" : False }
