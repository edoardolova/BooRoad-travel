import { useParams } from "react-router-dom";
import { useContext } from 'react'
import ContactsList from "../components/ContactsList";
import TripDetailsCard from "../components/TripDetailsCard";
import { TripContext } from "../contexts/TripContext";
import Jumbotron from "../components/Jumbotron";

export default function TripDetails() {

    const { tripId } = useParams();
    const { trips, getParticipantsByTripId } = useContext(TripContext)

    const trip = trips.find((t) => t.id === parseInt(tripId));
    const participants = getParticipantsByTripId(trip?.id);

    return (
        <main className="pt-5">

            {trip ? (
                <div className="container">
                    <section className="trip-details">
                        <TripDetailsCard trip={trip} />
                    </section>
                    <section className="participants">
                        <ContactsList participants={participants} />
                    </section>
                </div>
            ) : (
                <p>
                    Viaggio non trovato
                </p>
            )}
        </main>
    )
}