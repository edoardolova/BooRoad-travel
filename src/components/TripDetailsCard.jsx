export default function TripDetailsCard({ trip }) {
    return (
        <>
            {
                <div className="container my-4">
                    <h3>
                        Destinazione: {trip.destination}
                    </h3>
                    <hr />
                    <span>
                        Data di inizio: {trip.startDate}
                    </span>
                    <br />
                    <span>
                        Data di fine: {trip.endDate}
                    </span>
                </div>
            }
        </>
    )
}