import { Link } from "react-router-dom";

const Card = ({eventData}) => {
 return (
  <div className="card bg-body-secondary mb-5 rounded" style={{width:"25rem", height:"20rem"}}>
    <span className="badge rounded text-bg-light card-img-overlay m-2 p-2" style={{width: "25%", height: "10%"}}>{eventData.onlineOrOffline} Event</span>
    <img className="card-img-top" src={eventData.eventImageUrl} alt="Event Detail" style={{height:"15rem"}}/>
    <div className="card-body">
        <p className="card-subtitle text-body-secondary">
            {eventData.date}
            <strong> &middot; </strong> 
            {eventData.time}
        </p>
        <Link className="card-title" to={`/events/${eventData._id}`}><strong>{eventData.eventTitle}</strong></Link>
    </div>
  </div>
 )
}

export default Card;