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
//Convert totalTime to the unit of the timeUnit
if(timeUnit === 'hours'){
      totalTime = totalTime * 1000 * 60 * 60; //Convert to milliseconds
    }else if(timeUnit === 'days'){
      totalTime = totalTime * 1000 * 60 * 60 * 24; //Convert to milliseconds
    }else if(timeUnit === 'weeks'){
      totalTime = totalTime * 1000 * 60 * 60 * 24 * 7; //Convert to milliseconds
    }
console.log(startDate.getTime());
console.log(totalTime);
const endDate = (timeUnit = 'months') ? startDate.getMonth() + +totalTime : startDate.getTime() + totalTime
console.log(startDate, endDate);
//TODO: Add the values to the Log
  }


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
