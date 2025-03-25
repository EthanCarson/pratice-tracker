/*
Project Pratice Manager 
App.jsx
Generic Description
Originally Created by Ethan Carson 2025
*Made with Help from AI

*/

import { usePraticeContext } from "./PraticeContext";


export default function Reminder() {
const { completedTime } = usePraticeContext(); // Use the custom hook to access context
    const endDate = localStorage.getItem('endDate');
    const date = new Date();
    const parsedEndDate = new Date(endDate); // Parse endDate to a Date object
    let praticeTopic = localStorage.getItem('praticeTopic'); // Retrieve praticeTopic from local storage
    if (praticeTopic === null) {
        praticeTopic = ""; // Default value if praticeTopic is null
    }
    const praticeHours = localStorage.getItem('praticeHours');
    // console.log(date.getDate(), parsedEndDate.getDate()); // Use parsedEndDate.getDate() instead
 //   console.log(endDate);
let extraReminder;
switch (date.getDate()) {
    case parsedEndDate.getDate() - 7:
        if (endDate && !isNaN(parsedEndDate.getTime())) {
            extraReminder = "One week left!";
        } else {
            extraReminder = ""; // Default case if endDate is null or parsedEndDate is invalid
        }
        break;
    case parsedEndDate.getDate() - 3:
        extraReminder = "3 days left!";
        break;
    case parsedEndDate.getDate() - 1:
        extraReminder = "Your goal ends tommorow!";
        break;
        case parsedEndDate.getDate():
        extraReminder = "Your goal has ended!";
        break;
    default:
        extraReminder = ""; // Default case if no reminder
}
        return (
            !completedTime && 
            <div id="reminder">
                {endDate && 
                <p className="alert alert-primary">Goal: pratice {praticeTopic} for {praticeHours} hours by {endDate}</p>
                }
                {extraReminder && <p className={`alert ${parsedEndDate.getDate() === date.getDate() ? `alert-danger` : `alert-warning`}`}>{extraReminder}</p> }
            </div>
        );
}
