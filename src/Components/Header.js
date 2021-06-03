import React from 'react'


export default function Header(props) {
    const handleClick = () => {
        props.history.push("/myweek")
    }
    return (
        <div id="heading">
            <h1>My Fitness Tracker</h1>
            <button onClick={handleClick}>My Week</button>
        </div>
    )
}