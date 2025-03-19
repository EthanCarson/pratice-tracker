import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  function managePratice(e){
    e.preventDefault();
    //Collect the values from the form
    let praticeHours = document.getElementById('praticeHours').value;
    let totalTime = document.getElementById('totalTime').value;
    let timeUnit = document.getElementById('timeUnit').value;
    let repeat = document.getElementById('repeat').checked;
   // console.log(praticeHours, totalTime, timeUnit, repeat);
//Get current Date
const startDate = new Date();
//console.log(totalTime)
let endDate;
//Get the end date
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
    
    // Log for debugging
    // console.log(`Start date: ${startDate.toDateString()}`);
    // console.log(`Adding ${monthsToAdd} months`);
    // console.log(`End date: ${endDate.toDateString()}`);
    break;
  default:
    break;
}

//Store end Date and praticeHours in local storage
localStorage.setItem('endDate', endDate);
localStorage.setItem('praticeHours', praticeHours);
repeat && ( //If repeat is set, store the other values so they can be used to reset the timer
  localStorage.setItem('totalTime', totalTime), 
  localStorage.setItem('timeUnit', timeUnit)
)


  return (
    <div class={styles.App}>

      {/*Form to input the number of hours to practice and the total time to practice*/}

    <form onsubmit={managePratice}>

      <input type="number" id='praticeHours'/>
      <input type="number" id='totalTime'/>

      <select name="timeUnit" id="timeUnit">
        <option value="days">day(s)</option>
        <option value="weeks">week(s)</option>
        <option value="months">month(s)</option>
      </select>
      
      <input type="checkbox" name="repeat" id="repeat" />
      <input type="submit" />

    </form>

{/*Button to start the timer*/}

    <button>Start</button>
    <div id="Timer"></div>

{/*Log of the time spent practicing*/}

    <table id="Log">
<thead>
      <tr>
        <th>Date</th>
        <th>Start</th>
        <th>End</th>
      </tr>
      </thead>
      <tbody>
      {/*Add Components here*/}
</tbody>
    </table>
    </div>
  );
}

export default App;
