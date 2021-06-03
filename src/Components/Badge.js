import React from 'react'


export default function Badge({ day }) {
    return (
        <div>
            <h3 className={day}>{day}</h3>
        </div>
    )
}
