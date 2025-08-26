import { useState, useContext } from "react";
import { TripContext } from "../contexts/TripContext";

export default function TripForm() {
  const { addTrip, participants, trips } = useContext(TripContext);

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = trips.length > 0 ? trips[trips.length - 1].id + 1 : 1;

    const newTrip = {
      id,
      destination,
      startDate,
      endDate,
      participants: selectedParticipants,
      img,
      description,
    };

    addTrip(newTrip);

    // Reset form
    setDestination("");
    setStartDate("");
    setEndDate("");
    setSelectedParticipants([]);
    setImg("");
    setDescription("");
  };

  const handleCheckboxChange = (id) => {
    setSelectedParticipants((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="card p-4 mb-4">
      <h2 className="card-title mb-3">Crea un nuovo viaggio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">
            Destinazione
          </label>
          <input
            type="text"
            className="form-control"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Data inizio
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="endDate" className="form-label">
              Data fine
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        <fieldset className="mb-3">
          <legend className="form-label">Partecipanti</legend>
          <div className="row">
            {participants.map((p) => (
              <div className="col-6 col-md-4" key={p.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`participant-${p.id}`}
                    checked={selectedParticipants.includes(p.id)}
                    onChange={() => handleCheckboxChange(p.id)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`participant-${p.id}`}
                  >
                    {p.firstName} {p.lastName}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Immagine (URL)
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrizione
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Aggiungi viaggio
        </button>
      </form>
    </div>
  );
}
