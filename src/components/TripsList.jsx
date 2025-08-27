import TripCard from "./TripCard";
import { TripContext } from "../contexts/TripContext";
import { useContext } from "react";

export default function TripsList() {

    const { trips } = useContext(TripContext)

    return (
        <>
            <section className="bg-color-trip-list">
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-3 g-3 p-5 ">
                        {
                            trips.map(trip => {
                                return (
                                    <TripCard trip={trip} key={trip.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}