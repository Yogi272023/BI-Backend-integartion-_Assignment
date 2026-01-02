import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/BodyHeader";

const EventDetails = () => {
    const id = useParams()
    const {data, loading, error} = useFetch(`http://localhost:3000/events/${id.eventId}`)
    console.log(data)
    return data ? (
        <div className="bg-body-secondary">
        <Header />
        <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h2 className="my-3">{data.eventTitle}</h2>
                <p>Hosted By:<br />
                <strong>{data.eventHost}</strong></p>
                <img src={data.eventImageUrl} alt="Event Detail" style={{width: "100%"}} className="image-fluid"/>
                <h4 className="mt-3">Details:</h4>
                <p>{data.eventDescription}</p>
                <h4>Additional Information:</h4>
                <p><strong>Dress Code: </strong>{data.dressCode}<br />
                <strong>Age Restrictions: </strong>{data.ageRestriction}</p>
                <h4>Event Tags:</h4>
                {data.eventTags.map(tag => <p className="btn btn-danger me-3">{tag}</p>)}
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <div className="bg-light mt-5 rounded">
                    <p className="p-3">{data.eventTime}</p>
                    <p className="p-3">{data.eventVenue.split("  ").join("\n")}</p>
                    <p className="p-3">Rs. {data.price}</p>
                </div>
                <h3>Speaker{data.speakers.length > 1 ? "s" : ""}: ({data.speakers.length})</h3>
                <div className="row">
                    {data.speakers.map(speaker => (
                        <div className="col-md-6" key={speaker._id}>
                            <div className="bg-light text-center rounded p-3">
                            <img src={speaker.imageUrl} alt="user image" style={{width: "50%"}}/>
                            <h6>{speaker.name}</h6>
                            <p>{speaker.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
}

export default EventDetails;