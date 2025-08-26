export default function TripCard() {
    const trips = [
        {
            id: 1,
            destination: "Roma",
            startDate: "2025-09-01",
            endDate: "2025-09-05",
            participants: [101, 102, 103, 104],
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            destination: "Milano",
            startDate: "2025-10-10",
            endDate: "2025-10-15",
            participants: [105, 106, 107, 108],
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            destination: "Firenze",
            startDate: "2025-11-20",
            endDate: "2025-11-25",
            participants: [109, 110, 111, 112],
            img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 4,
            destination: "Napoli",
            startDate: "2025-12-05",
            endDate: "2025-12-10",
            participants: [113, 114, 115, 116],
            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 5,
            destination: "Torino",
            startDate: "2026-01-15",
            endDate: "2026-01-20",
            participants: [117, 118, 119, 120],
            img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {trips.map(trip => (
                            <div className="col" key={trip.id}>
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src={trip.img}
                                        alt={trip.destination}
                                    />
                                    <div className="card-body">
                                        <h3>{trip.destination}</h3>
                                        <p>
                                            Dal {trip.startDate} al {trip.endDate}
                                        </p>
                                        <p>
                                            Partecipanti: {trip.participants.length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}