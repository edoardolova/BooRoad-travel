import React, { useContext, useState } from "react";
import { TripContext } from "../contexts/TripContext";

export default function ParticipantForm({ onSubmitSuccess }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxCode, setTaxCode] = useState("");

  const { addParticipant, participants } = useContext(TripContext);

  function handleSubmit(e) {
    e.preventDefault();

    const id =
      participants.length > 0 ? participants[participants.length - 1].id + 1 : 1;

    const newParticipant = {
      id,
      firstName,
      lastName,
      email,
      phone,
      taxCode,
    };

    addParticipant(newParticipant);

    // reset campi
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTaxCode("");

    if (onSubmitSuccess) onSubmitSuccess(); // chiude la modale
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Cognome</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Telefono</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tax Code</label>
        <input
          type="text"
          className="form-control"
          value={taxCode}
          onChange={(e) => setTaxCode(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Invia
      </button>
    </form>
  );
}
