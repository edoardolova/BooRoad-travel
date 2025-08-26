import TripCard from "./TripCard";

export default function TripsList() {
    return (
        <>
            <section className="bg-color-trip-list">
                <div className="container">
                    <h1 className="p-4 mb-3">TripsList</h1>
                    <TripCard />
                </div>
            </section>
        </>
    )
}