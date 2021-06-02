import React from 'react'

export default function WorkOutCards(props) {
    return (
        <section id="WorkOutCard">
            {props.workOutData.map(
                workOut =>
                    <div className="food">
                        <h1>{workOut.name}</h1>
                        <h1>{workOut.description}</h1>
                        <img alt="Pizza Pizza" src={workOut.image}></img>
                    </div>
            )}
        </section>
    )
}