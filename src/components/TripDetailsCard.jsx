export default function TripDetailsCard({ trip }) {
    return (
        <>
            {
                <>
                    <h3>
                        Dettagli Viaggio
                    </h3>
                    <div className="tripDetailsTable">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">
                                        Destinazione
                                    </th>
                                    <th scope="col">
                                        Data di inizio
                                    </th>
                                    <th scope="col">
                                        Data di fine
                                    </th>
                                    <th scope="col">
                                        Partecipanti
                                    </th>
                                    <th scope="col">
                                        Stato
                                    </th>
                                    <th scope="col">
                                        Immagine
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                <tr scope="row" className="text-center">
                                    <td scope="col">
                                        <div className="fw-bold">{trip.destination}</div>
                                    </td>
                                    <td scope="col">
                                        {trip.startDate}
                                    </td>
                                    <td scope="col">
                                        {trip.endDate}
                                    </td>
                                    <td scope="col">
                                        {trip.participants.length}
                                    </td>
                                    <td scope="col">
                                        <div className="mx-auto signup-closed">
                                            Iscrizioni chiuse
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <img
                                            src={trip.img}
                                            alt={trip.destination}
                                            style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "12px", marginBottom: "8px" }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    )
}