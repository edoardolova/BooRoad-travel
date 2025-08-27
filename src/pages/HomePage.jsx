import TripsList from "../components/TripsList";
import TripForm from "../components/TripForm";
import Jumbotron from "../components/Jumbotron";
import ParticipantForm from "../components/PartecipantForm";

export default function HomePage() {
    return (
        <main className="pt-5">
            <section className="bg-color-homeJumbotron">

                <Jumbotron className="bg-color-homeJumbotron" title="Boo Road Travel" text="I nostri Viaggi" cta="Tutti i Viaggi" img_url="https://esempio.com/banner.jpg" />
            </section>
            <TripsList />
            <ParticipantForm />
            <TripForm />
        </main>
    )
}