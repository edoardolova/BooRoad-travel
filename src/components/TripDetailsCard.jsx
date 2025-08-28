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
                                <tr>
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
                                        Imagine
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                <tr>
                                    <td scope="row" className="">

                                        <div className="fw-bold">{trip.destination}</div>
                                    </td>
                                    <td>
                                        {trip.startDate}
                                    </td>
                                    <td>
                                        {trip.endDate}
                                    </td>
                                    <td>
                                        {trip.participants.length}
                                    </td>
                                    <td>
                                        <div className="signup-closed">
                                            Iscrizioni chiuse
                                        </div>
                                    </td>
                                    <td>
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