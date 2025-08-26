import React, { useContext } from "react";
import { TripContext } from "../contexts/TripContext";

export default function TripCard() {
    const { trips, getParticipantsByTripId } = useContext(TripContext);
    return (
        <>
            <section >
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3 p-5 ">
                        {trips.map(trip => (
                            <div className="" key={trip.id}>
                                <div className="card col h-100 w-100  ">
                                    <img
                                        className="card-img-top "
                                        src={trip.img}
                                        alt={trip.destination}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h3>{trip.destination}</h3>
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}