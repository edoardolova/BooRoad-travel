export default function ContactsList({ participants }) {
    return (
        <>
            <h2>
                Partecipanti:
            </h2>
            <div className="container text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                #
                            </th>
                            <th scope="col">
                                Nome
                            </th>
                            <th scope="col">
                                Cognome
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants && participants.length > 0 ? (
                            participants.map((p) => (
                                <tr key={p.id}>
                                    <th scope="row">
                                        {p.id}
                                    </th>
                                    <td>
                                        {p.firstName}
                                    </td>
                                    <td>
                                        {p.lastName}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>
                                    Ancora nessun partecipante!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}