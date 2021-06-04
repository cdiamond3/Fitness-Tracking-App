import React from 'react'
import { Link } from "react-router-dom"

export default function Header(props) {
    // const handleClick = () => {
    //     props.history.push("/myweek")
    // }
    return (
        <div id="heading">
            <h1>My Fitness Tracker</h1>
            {/* <button onClick={handleClick}>My Week</button> */}
            <nav>
                <ul>
                    <li>
                    <Link to="/"> Home </Link>
                    </li>
                    <li>
                    <Link to="/myweek">My Week</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}