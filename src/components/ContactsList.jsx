import { useState } from "react";
import ContactCard from "./ContactCard";

export default function ContactsList({ participants }) {

    const [searchTerm, setSearchTerm] = useState("");
    const filteredParticipants = participants.filter((participant) =>
        participant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>
                        Partecipanti
                    </h3>
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca per partecipante..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="participantsTable">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {filteredParticipants && filteredParticipants.length > 0 ? (
                        filteredParticipants.map((p, index) => (
                            <>
                                <ContactCard key={p.id} p={p} index={index} />
                            </>
                        ))
                    ) : (
                        <tr>
                            <td>
                                Ancora nessun partecipante!
                            </td>
                        </tr>
                    )}
                </div>
            </div>
        </>
    )
}