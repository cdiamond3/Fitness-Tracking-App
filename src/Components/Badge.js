import React from 'react'


export default function Badge({ day }) {
    return (
        <div>
            <h3 id="badges" className={day}>{day}</h3>
        </div>
    )
}
