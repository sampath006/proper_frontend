import React from 'react'
import Event from '../event/Event'
import "./events.css"
export default function Events({events}) {
    return (
        // Fetching and mapping the event data to the events 
        <div className="events">
            {events.map((e)=>(
                 <Event key={e._id} event={e}/>
            ))}
            {/* {events.lenght} */}
        </div>
    )
}
