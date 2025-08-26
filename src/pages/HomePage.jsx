import TripsList from "../components/TripsList";
import Jumbotron from "../components/Jumbotron";

export default function HomePage() {
    return (
        <>
            <section className="bg-color-homeJumbotron">

                <Jumbotron className="bg-color-homeJumbotron" title="Boo Road Travel" text="I nostri Viaggi" cta="Tutti i Viaggi" img_url="https://esempio.com/banner.jpg" />
            </section>
            <TripsList />
        </>
    )
}