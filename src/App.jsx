import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoalTracker from './GoalTracker';
function App() {
  return (
    <div className={styles.App}>
    
    < GoalTracker />
      
      {/* Button to start the timer */}
      <button>Start</button>
      <div id="Timer"></div>
      
      {/* Log of the time spent practicing */}
      <table id="Log">
        <thead>
          <tr>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {/* Add Components here */}
        </tbody>
      </table>
    </div>
  );
}

export default App;