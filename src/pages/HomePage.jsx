import TripsList from "../components/TripsList";
import Jumbotron from "../components/Jumbotron";

export default function HomePage() {
    return (
        <>
            <Jumbotron title="Boo Road Travel" text="Inostri Viaggi" cta="Tutti i Viaggi" img_url="https://esempio.com/banner.jpg" />
            <TripsList />
        </>
    )
}