import { createSignal, onCleanup, createEffect } from "solid-js"; // Import createSignal, onCleanup, and createEffect

import { usePraticeContext } from "./PraticeContext"; // Import the custom hook

export default function Timer() {
    const { Pratice, currentPratice, setCurrentPratice, setHasStoredPratice } = usePraticeContext(); // Use the custom hook to access context

    let date;
    let start;
    let end; // Variables to store the date, start time, and end time
    const [isTiming, setIsTiming] = createSignal(false); // Use createSignal for isTiming
    let timerDisplay; // Variable to store the timer display
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let intervalId; // Declare intervalId in the outer scope

    // Function to start the timer
    function startTimer() {
        date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }); // Get the current date in month/day/year format
        start = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // Get the current time in hour:minute AM/PM format

        setIsTiming(true); // Set the timer state to running

        // Start the interval for the timer
        intervalId = setInterval(() => {
            if (isTiming()) {
                seconds += 1;
                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                }
                updateTimerDisplay(); // Call to update the display
            }
        }, 1000);
    }

    // Function to update the timer display
    function updateTimerDisplay() {
        if (timerDisplay) {
            timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    function stopTimer() {
        setIsTiming(false); // Set the timer state to stopped

        end = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // Get the current time in hour:minute AM/PM format

        // Create a new Pratice object
        const pratice = new Pratice(start, end, date);

        setCurrentPratice(pratice); // Use the context function to update currentPratice
        setHasStoredPratice(true); // Use the context function to update hasStoredPratice

        // Reset the timer display and stop the timer
        clearInterval(intervalId); // Clear the interval
        timerDisplay.textContent = ""; // Clear the timer display
        seconds = 0; // Reset seconds
        minutes = 0; // Reset minutes
        hours = 0; // Reset hours
    }

    return (
        <>
            {/* Button to start the timer */}
            <button onClick={() => { isTiming() ? stopTimer() : startTimer(); }}>{isTiming() ? "Stop" : "Start"}</button>
            <div id="Timer" ref={el => timerDisplay = el}></div>
        </>
    );
}
