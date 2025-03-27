/*
Project Pratice Manager 
App.jsx
Generic Description
Originally Created by Ethan Carson 2025
*Made with Help from AI

*/
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoalTracker from './GoalTracker';
import { PraticeProvider } from './PraticeContext';
import Timer from './Timer';
import Log from './Log';
import Reminder from './Reminder';

function App() {
  return (
    <PraticeProvider>
      <div className={styles.App}>
        <GoalTracker />
        <br />
        <Timer />
        {/* Log of the time spent practicing */}
        <br />
        <table id="Log" className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            <Log />
          </tbody>
        </table>
        <br />
        <Reminder />
      </div>
    </PraticeProvider>
  );
}

export default App;