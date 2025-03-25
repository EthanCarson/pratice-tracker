/*
Project Pratice Manager 
App.jsx
Generic Description
Originally Created by Ethan Carson 2025
*Made with Help from AI

*/

export default function GoalTracker() {
    function managePratice(e) {
        e.preventDefault();
        
        // Collect the values from the form
        let praticeHours = document.getElementById('praticeHours').value;
        let totalTime = document.getElementById('totalTime').value;
        let timeUnit = document.getElementById('timeUnit').value;
        let repeat = document.getElementById('repeat').checked;
        
        // Get current Date
        const startDate = new Date();
        let endDate;
        
        // Get the end date
        switch (timeUnit) {
          case 'days':
            endDate = new Date(startDate.getTime() + totalTime * 24 * 60 * 60 * 1000);
            break;
          case 'weeks':
            endDate = new Date(startDate.getTime() + totalTime * 7 * 24 * 60 * 60 * 1000);
            break;
          case 'months':
            // Create a new date object to avoid modifying the original
            endDate = new Date(startDate);
            
            // Parse totalTime to ensure it's treated as a number
            const monthsToAdd = parseInt(totalTime, 10);
            
            // Simple validation - if for some reason totalTime isn't a valid number
            if (isNaN(monthsToAdd)) {
              console.error("Invalid months value:", totalTime);
              break;
            }
            
            // Add the months
            endDate.setMonth(endDate.getMonth() + monthsToAdd);
            break;
          default:
            break;
        }
        
        // Store end Date and praticeHours in local storage
        localStorage.setItem('endDate', endDate);
        localStorage.setItem('praticeHours', praticeHours);
        
        if (repeat) {
          // If repeat is set, store the other values so they can be used to reset the timer
          localStorage.setItem('totalTime', totalTime);
          localStorage.setItem('timeUnit', timeUnit);
        }
        
        //console.log(startDate, endDate); // For debugging
      }
if(new Date(localStorage.getItem('endDate')).getTime() <= new Date().getTime()){
    localStorage.removeItem('endDate'); // Remove the end date from local storage if it's today
    if(localStorage.getItem('totalTime') && localStorage.getItem('timeUnit')){
      document.getElementById('totalTime').value = localStorage.getItem('totalTime');
      document.getElementById('timeUnit').value = localStorage.getItem('timeUnit');
      managePratice(); // Call managePratice to reset the timer
    }
}
      return (
        <>
          {/* Form to input the number of hours to practice and the total time to practice */}
          <form onSubmit={managePratice} >
            <label htmlFor="praticeHours" className="form-label m-3 lead">I want to pratice</label>
            <input type="number" id="praticeHours" className="form-control m-3" placeholder="Enter hours to practice" />
            <label htmlFor="totalTime" className="form-label m-3 lead">hours in</label>
            <input type="number" id="totalTime" className="form-control m-3" placeholder="Enter total time" />
            <select name="timeUnit" id="timeUnit" className="form-select m-3">
              <option value="days">day(s)</option>
              <option value="weeks">week(s)</option>
              <option value="months">month(s)</option>
            </select>
            
            <input type="checkbox" name="repeat" id="repeat" className="form-check-input mb-3" />
            <label htmlFor="repeat" className="form-check-label m-3 lead">  Repeat</label>
            <br />
            <input type="submit"  className="btn btn-outline-primary"/>
          </form>
          </>
      );
}