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

    return (
        <PraticeContext.Provider value={{ hasStoredPratice, setHasStoredPratice, currentPratice, setCurrentPratice, Pratice }}>
            {props.children}
        </PraticeContext.Provider>
    );
}

export const usePraticeContext = () => useContext(PraticeContext);
