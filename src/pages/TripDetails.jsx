import { useParams } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import TripDetailsCard from "../components/TripDetailsCard";
import { TripContext } from "../contexts/TripContext";

export default function TripDetails() {

    const { tripId } = useParams();
    const { trips, getParticipantsByTripId } = TripContext()

    const trip = trips.find((t) => t.id === parseInt(tripId));
    const participants = getParticipantsByTripId(trip?.id);

    return (
        <>
            <Jumbotron />
            {trip ? (
                <div>
                    <TripDetailsCard trip={trip} />
                    <ContactsList participants={participants} />
                </div>
            ) : (
                <p>
                    Viaggio non trovato
                </p>
            )}
        </>
    )
}