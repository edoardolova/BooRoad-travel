import TripCard from "./TripCard";
import { TripContext } from "../contexts/TripContext";
import { useContext, useState } from "react";

export default function TripsList() {
    const { trips } = useContext(TripContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortedOrder, setSortedOrder] = useState("asc");

    // filtro per destinazione
    const filteredTrips = trips.filter((trip) =>
        trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ordino per data
    const sortedTrips = [...filteredTrips].sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return sortedOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    function toggleSortOrder() {
        setSortedOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    }

    return (
        <>
            <section className="pt-4 ">
                <div className="container">
                    <div className="d-flex gap-3 mx-5">

                        {/* barra di ricerca */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cerca per destinazione..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {/* bottone toggle sorting  */}
                        <button
                            className="btn btn-outline-primary d-flex align-items-center gap-2"
                            onClick={toggleSortOrder}
                        >
                            <i className="bi bi-calendar-event"></i>
                            {sortedOrder === 'asc' ? (
                                <i className="bi bi-arrow-up"></i>
                            ) : (
                                <i className="bi bi-arrow-down"></i>
                            )}
                        </button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-3 p-5 ">
                        {
                            sortedTrips.map(trip => {
                                return (
                                    <TripCard trip={trip} key={trip.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
