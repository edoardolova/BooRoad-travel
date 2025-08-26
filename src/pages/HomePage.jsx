import TripsList from "../components/TripsList";
import Jumbotron from "../components/Jumbotron";

export default function HomePage() {
    return (
        <>
            <Jumbotron title="Boo Road Travel" text="Scopri le migliori destinazioni e pianifica il Tuo Viaggio" cta="Scopri i Viaggi" img_url="https://esempio.com/banner.jpg" />
            <TripsList />
        </>
    )
}