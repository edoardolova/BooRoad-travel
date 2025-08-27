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
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                <tr>
                                    <td scope="row">
                                        {trip.destination}
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    )
}