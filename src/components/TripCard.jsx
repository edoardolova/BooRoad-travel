import { Link } from "react-router-dom";
export default function TripCard({ trip }) {

    return (
        <>
            <Link to={`/trip/${trip.id}`}>
                <div className="container">
                    <div className="" key={trip.id}>
                        <div className="card col ">
                            <h3 className="p-1 ">{trip.destination}</h3>
                            <img
                                className="card-img-top "
                                src={trip.img}
                                alt={trip.destination}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <p>
                                    Dal {trip.startDate} al {trip.endDate}
                                </p>
                                <p>
                                    Partecipanti: {trip.participants.length}
                                </p>
                                <p>
                                    Descrizione:{trip.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}