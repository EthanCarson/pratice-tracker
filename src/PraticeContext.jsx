/*
Project Pratice Manager 
App.jsx
Generic Description
Originally Created by Ethan Carson 2025
*Made with Help from AI

*/

import { createContext, useContext, createSignal } from "solid-js";

const PraticeContext = createContext();

class Pratice {
    constructor(startTime, endTime, date) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = date;
    }
}

export function PraticeProvider(props) {
    const [hasStoredPratice, setHasStoredPratice] = createSignal(false);
    const [currentPratice, setCurrentPratice] = createSignal(null);
    const [completedTime, setCompletedTime] = createSignal(false);

    const contextValue = {
        hasStoredPratice,
        setHasStoredPratice,
        currentPratice,
        setCurrentPratice,
        Pratice,
        completedTime,
        setCompletedTime
    };

    return (
        <PraticeContext.Provider value={contextValue}>
            {props.children}
        </PraticeContext.Provider>
    );
}

export const usePraticeContext = () => {
    const context = useContext(PraticeContext);
    if (!context) {
        throw new Error("usePraticeContext must be used within a PraticeProvider");
    }
    return context;
};
