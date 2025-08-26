import React from "react";

export default function ParticipantForm() {
	return (
		<div className="card shadow p-4">
			<h3 className="card-title mb-3">Registrazione Partecipante</h3>
			<form>
				<div className="mb-3">
					<label className="form-label">Nome</label>
					<input type="text" className="form-control" name="nome" />
				</div>

				<div className="mb-3">
					<label className="form-label">Cognome</label>
					<input type="text" className="form-control" name="cognome" />
				</div>

				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" name="email" />
				</div>

				<div className="mb-3">
					<label className="form-label">Telefono</label>
					<input type="tel" className="form-control" name="telefono" />
				</div>

				<div className="mb-3">
					<label className="form-label">Tax Code</label>
					<input type="text" className="form-control" name="taxcode" />
				</div>

				<button type="submit" className="btn btn-primary w-100">
					Invia
				</button>
			</form>
		</div>
	);
}