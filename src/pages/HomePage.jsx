import { useState } from "react";
import TripsList from "../components/TripsList";
import Jumbotron from "../components/Jumbotron";
import TripForm from "../components/TripForm";
import ParticipantForm from "../components/PartecipantForm"; // occhio alla spelling!
import Modal from "../components/Modal";

export default function HomePage() {
  const [showTripForm, setShowTripForm] = useState(false);
  const [showParticipantForm, setShowParticipantForm] = useState(false);

  return (
    <main className="pt-5 mt-5">
      {/* <section className="bg-color-homeJumbotron">
        <Jumbotron
          className="bg-color-homeJumbotron"
          title="Boo Road Travel"
          text="I nostri Viaggi"
          cta="Tutti i Viaggi"
          img_url="https://esempio.com/banner.jpg"
        />
      </section> */}

      {/* Bottoni per aprire le modali */}
      <div className="container my-4 d-flex">
        <button
          className="btn btn-primary me-4 ms-auto"
          onClick={() => setShowTripForm(true)}
        >
          + Nuovo Viaggio
        </button>
        <button
          className="btn btn-secondary me-auto"
          onClick={() => setShowParticipantForm(true)}
        >
          + Nuovo Partecipante
        </button>
      </div>

      {/* Lista viaggi */}
      <TripsList />

      {/* Modale TripForm */}
      {showTripForm && (
        <Modal
          title="Crea un nuovo viaggio"
          onClose={() => setShowTripForm(false)}
        >
          <TripForm onSubmitSuccess={() => setShowTripForm(false)} />
        </Modal>
      )}

      {/* Modale ParticipantForm */}
      {showParticipantForm && (
        <Modal
          title="Registrazione partecipante"
          onClose={() => setShowParticipantForm(false)}
        >
          <ParticipantForm onSubmitSuccess={() => setShowParticipantForm(false)} />
        </Modal>
      )}
    </main>
  );
}
