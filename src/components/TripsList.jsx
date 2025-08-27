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
    <section className="bg-color-trip-list">
      <div className="container">
        {/* barra di ricerca */}
        <div className="pt-5 d-flex gap-3 px-5">
          <input
            type="text"
            className="form-control"
            placeholder="Cerca per destinazione..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="btn btn-outline-primary"
            onClick={toggleSortOrder}
          >
            Ordina per data {sortedOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3 p-5 ">
          {sortedTrips.map((trip) => (
            <TripCard trip={trip} key={trip.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
