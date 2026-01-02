import useFetch from "../useFetch.js"
import Card from "../components/Card"
import { useState } from "react"

const EventListing = () => {
 const [selectedEvents, setSelectedEvents] = useState("")
 const {data, loading, error} = useFetch("http://localhost:3000/events")
 const filteredEvents = selectedEvents === "" || selectedEvents === "Both" ? data : data.filter(event => event.onlineOrOffline === selectedEvents)
 return data ? (
    <div className="container">
        <div className="d-flex justify-content-between">
            <h1>Meetup Events</h1>
            <select onChange={(e) => setSelectedEvents(e.target.value)} className="rounded mt-3" style={{height: "15%"}}>
                <option value="">Select Event Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
            </select>
        </div>
        <div className="row my-3">
           {filteredEvents.map(event => (
            <div className="col-md-4" key={event._id}>
                <Card eventData={event}/>
            </div>
           ))}
        </div>
    </div>
 ) : (
    loading && <p>Loading...</p>
 )
}

export default EventListing;
