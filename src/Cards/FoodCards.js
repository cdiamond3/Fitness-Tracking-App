import React from 'react'

export default function FoodCards(props) {
    return (
        <section id="foodCard">
            {props.foodData.map(
                food =>
                    <div className="food">
                        <h1>{food.name}</h1>
                        <h1>{food.Description}</h1>
                        <img alt="Pizza Pizza" src={food.image}></img>
                    </div>
            )}
        </section>
    )
}
