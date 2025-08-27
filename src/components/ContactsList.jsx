import ContactCard from "./ContactCard";

export default function ContactsList({ participants }) {

    return (
        <>
            <h3>
                Partecipanti:
            </h3>
            <div className="participantsTable">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {participants && participants.length > 0 ? (
                        participants.map((p, index) => (
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