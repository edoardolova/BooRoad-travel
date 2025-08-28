import Modal from "./Modal";
import ParticipantForm from "./PartecipantForm";
import { useState } from "react";
import ContactCard from "./ContactCard";
import { useContext } from "react";
import { TripContext } from "../contexts/TripContext";

export default function ContactsList({ participants }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [showParticipantForm, setShowParticipantForm] = useState(false);
    const [updatedParticipants, setUpdatedParticipants] = useState(participants);
    /* const { setParticipant } = useContext(TripContext); */
    console.log(participants);

    /* const addParticipant = (newParticipant) => {
        setParticipants((prev) => [...prev, newParticipant]);
    }; */

    const filteredParticipants = participants ? participants.filter((participant) =>
        participant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
        : [];

    console.log(filteredParticipants);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>
                        Partecipanti
                    </h3>
                </div>
                <div className="col">
                    <button
                        className="btn btn-secondary me-auto"
                        onClick={() => setShowParticipantForm(true)}
                    >
                        + Nuovo Partecipante
                    </button>
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
            {showParticipantForm && (
                <Modal
                    title="Registrazione partecipante"
                    onClose={() => setShowParticipantForm(false)}
                >
                    <ParticipantForm onSubmitSuccess={() => {
                        setShowParticipantForm(false);
                    }} />
                </Modal>
            )}
        </>
    )
}