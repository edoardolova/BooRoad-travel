
import React, { createContext, useState } from "react";
import { trips as initialTrips, participants as initialParticipants } from "../data/data.js";

export const TripContext = createContext();

export function TripProvider ({ children }){
  // stati reattivi
  const [trips, setTrips] = useState(initialTrips);
  const [participants, setParticipants] = useState(initialParticipants);

  // funzione helper per ottenere partecipanti di un viaggio
  const getParticipantsByTripId = (tripId) => {
    const trip = trips.find(t => t.id === tripId);
    if (!trip){
        return [];
    } 
    return participants.filter(p => trip.participants.includes(p.id));
  };

  return (
    <TripContext.Provider value={{ trips, setTrips, participants, setParticipants, getParticipantsByTripId }}>
      {children}
    </TripContext.Provider>
  );
};


