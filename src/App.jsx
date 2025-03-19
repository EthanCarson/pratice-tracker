import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div class={styles.App}>

      {/*Form to input the number of hours to practice and the total time to practice*/}

    <form>

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
