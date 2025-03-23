import { createEffect, createSignal } from "solid-js"; // Import createEffect and createSignal
import { usePraticeContext } from "./PraticeContext"; // Import the custom hook

export default function Log() {
    const [pratices, setPratices] = createSignal([]); // Use createSignal to manage pratices state
    const { Pratice, currentPratice } = usePraticeContext(); // Use the custom hook to access context

    // Load the pratices array from local storage when the component mounts
    createEffect(() => {
        const storedPratices = JSON.parse(localStorage.getItem('pratices')) || [];
        const loadedPratices = storedPratices.map(pratice => new Pratice(pratice.startTime, pratice.endTime, pratice.date));
        setPratices(loadedPratices); // Set the loaded pratices to state
    });

    // When a new Pratice is added, add it to the pratices array
    createEffect(() => {
        const pratice = currentPratice();
        if (pratice) {
            setPratices(prev => [...prev, pratice]); // Update pratices state with the new pratice
            localStorage.setItem('pratices', JSON.stringify([...pratices(), pratice])); // Store updated pratices in local storage
        }
    });

    return (
        <>
            {pratices().map((pratice, index) => (
                <tr key={index}>
                    <td>{pratice.date}</td>
                    <td>{pratice.startTime}</td>
                    <td>{pratice.endTime}</td>
                </tr>
            ))}
        </>
    );
}