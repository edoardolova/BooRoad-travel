export default function ContactCard({ p, index }) {

    const uniqueId = `flush-collapse-${index}`;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed d-block" type="button" data-bs-toggle="collapse" data-bs-target={`#${uniqueId}`} aria-expanded="false" aria-controls={uniqueId}>
                        <div className="row justify-content-around gap-5">
                            <div className="col-3 d-flex align-items-center">
                                <div className="me-3">
                                    <b>
                                        {index + 1}
                                    </b>
                                </div>
                                <div>
                                    {`${p.firstName} ${p.lastName}`}
                                </div>
                            </div>
                            <div className="tags col d-flex gap-2">
                                {
                                    p.tag.map((item) => {
                                        if (item === "ID OK") {
                                            return (
                                                <div className="tagID_OK">
                                                    {item}
                                                </div>
                                            )
                                        } else if (item === "<18") {
                                            return (
                                                <div className="tagMin18">
                                                    {item}
                                                </div>
                                            )
                                        } else if (item === "No glutine") {
                                            return (
                                                <div className="tagGlutenFree">
                                                    {item}
                                                </div>
                                            )
                                        } else if (item === "Problemi motori") {
                                            return (
                                                <div className="tagDisabled">
                                                    {item}
                                                </div>
                                            )
                                        } else if (item === "Cliente Premium") {
                                            return (
                                                <div className="tagPremium">
                                                    {item}
                                                </div>
                                            )
                                        } else if (item === "In attesa ID") {
                                            return (
                                                <div className="tagCheckID">
                                                    {item}
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </button>
                </h2>
                <div id={uniqueId} className="accordion-collapse collapse" data-bs-parent="accordionFlushExample">
                    <div className="accordion-body">
                        <table className="table">
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
        </>

    )
}