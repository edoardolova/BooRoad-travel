
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

    // aggiungere un nuovo partecipante
    const addParticipant = (newParticipant) => {
        setParticipants(prev => [...prev, newParticipant]);
    };

    // aggiungere un nuovo viaggio
    const addTrip = (newTrip) => {
        setTrips(prev => [...prev, newTrip]);
    };

    const addParticipantToTrip = (tripId, participantId) => {
        // prevTrips è l’array attuale dei viaggi
        setTrips(prevTrips =>
        prevTrips.map(trip => {
            if (trip.id === tripId) {
                // verifica se il partecipante è già presente
                if (!trip.participants.includes(participantId)) {
                    // crea un nuovo oggetto viaggio con il nuovo partecipante aggiunto
                    return { ...trip, participants: [...trip.participants, participantId] };
                }
            }
            // ritorna il viaggio invariato se non corrisponde o se il partecipante è già presente
            return trip;
        })
        );
    };


    return (
        <TripContext.Provider value={{ 
            trips, 
            setTrips, 
            participants, 
            setParticipants, 
            getParticipantsByTripId,
            addParticipant,
            addTrip,
            addParticipantToTrip 
        }}>
        {children}
        </TripContext.Provider>
    );
};


