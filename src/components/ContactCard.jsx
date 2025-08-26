export default function ContactCard({ p, index }) {

    const uniqueId = `flush-collapse-${index}`;

    return (
        <>
            <div className="accordion-item">
                <div className="row my-3">
                    <div className="col-3 d-flex align-items-center">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${uniqueId}`}
                                aria-expanded="false"
                                aria-controls={uniqueId}>
                                <span>
                                    <b>
                                        {index + 1}
                                    </b>
                                    {` ${p.firstName} ${p.lastName}`}
                                </span>
                            </button>
                        </h2>
                    </div>
                    <div className="col-9">
                        <div
                            id={uniqueId}
                            className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                Nome
                                            </th>
                                            <th scope="col">
                                                Cognome
                                            </th>
                                            <th scope="col">
                                                Email
                                            </th>
                                            <th scope="col">
                                                Numero di telefono
                                            </th>
                                            <th scope="col">
                                                Codice fiscale
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {p.firstName}
                                            </td>
                                            <td>
                                                {p.lastName}
                                            </td>
                                            <td>
                                                {p.email}
                                            </td>
                                            <td>
                                                {p.phone}
                                            </td>
                                            <td>
                                                {p.taxCode}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}