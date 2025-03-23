import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoalTracker from './GoalTracker';
import { PraticeProvider } from './PraticeContext';
import Timer from './Timer';

function App() {
  return (
    <PraticeProvider>
      <div className={styles.App}>
        <GoalTracker />
        <Timer />
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
    </PraticeProvider>
  );
}

export default App;