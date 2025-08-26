import React, { useContext, useState } from "react";
import { TripContext } from "../contexts/TripContext";


// { id: 120, firstName: "Ilaria", lastName: "Giordano", email: "ilaria.giordano@example.com", phone: "1234567819", taxCode: "GRDILR94D58H501J" }


export default function ParticipantForm() {

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [taxCode, setTaxCode] = useState("")

	const { addParticipant, participants } = useContext(TripContext)


	function handleSubmit(e) {
		e.preventDefault()
		const id = participants[participants.length - 1].id + 1

		const NewPartecipant = {
			id,
			firstName,
			lastName,
			email,
			phone,
			taxCode
		}

		addParticipant(NewPartecipant)

		setFirstName("")
		setLastName("")
		setEmail("")
		setPhone("")
		setTaxCode("")

	}

	return (
		<div className="card shadow p-4">
			<h3 className="card-title mb-3">Registrazione Partecipante</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Nome</label>
					<input type="text" className="form-control" name="nome" value={firstName} onChange={e => setFirstName(e.target.value)} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Cognome</label>
					<input type="text" className="form-control" name="cognome" value={lastName} onChange={e => setLastName(e.target.value)} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Telefono</label>
					<input type="tel" className="form-control" name="telefono" value={phone} onChange={e => setPhone(e.target.value)} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Tax Code</label>
					<input type="text" className="form-control" name="taxcode" value={taxCode} onChange={e => setTaxCode(e.target.value)} required />
				</div>

				<button type="submit" className="btn btn-primary w-100">
					Invia
				</button>
			</form>
		</div>
	);
}