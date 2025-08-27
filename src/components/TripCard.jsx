import { Link } from "react-router-dom";
export default function TripCard({ trip }) {
    return (
        <div className="card trip-horizontal-card w-100 my-3 p-4 d-flex flex-row align-items-center shadow-sm">
            {/* Sezione sinistra: data */}
            <div className="trip-date text-center px-3">
                <div className="fs-1 fw-bold">{trip.startDate.split('-')[2]}</div>
                <div className="text-uppercase fw-bold">{trip.startDate.split('-')[1]}</div>
                <div className="text-muted">{trip.duration || "14gg"}</div>
            </div>
            <div className="vr mx-3" /> {/* linea verticale */}
            {/* Sezione centrale: titolo e descrizione */}
            <div className="flex-grow-1">
                <h3 className="fw-bold mb-1">{trip.destination}</h3>
                <p className="mb-1">Dal {trip.startDate} al {trip.endDate}</p>
                <p className="mb-1">Partecipanti: {trip.participants.length}</p>
                <p className="mb-0">Descrizione: {trip.description}</p>
            </div>
            {/* Sezione destra: bottone */}
            <div className="d-flex flex-column align-items-end ms-3">
                <Link to={`/trip/${trip.id}`} className="btn btn-teal">
                    Dettagli viaggio
                </Link>
            </div>
        </div>
    );
}