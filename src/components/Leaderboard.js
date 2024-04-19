import React from 'react';
import '../styles/styles.css';  

function Leaderboard({ robots, setRobots }) {
  const clearLeaderboard = () => {
    // Remove all robots from the state
    setRobots([]);
  };

   // Calculate the leaderboard data
   const leaderboard = {};
   robots.forEach((robot) => {
     leaderboard[robot.name] = {
       tasksCompleted: robot.completedTasks.length,
       totalTasks: robot.selectedTasks.length,
     };
   });

   
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard <button type="button" className="btn btn-outline-secondary" onClick={clearLeaderboard}>Clear</button></h2>
      <ul className="list-group mb-3">
        {Object.entries(leaderboard).map(([robotName, progress]) => (
          <li key={robotName} className="list-group-item">
            Robot: <strong>{robotName}</strong>: {progress.tasksCompleted} tasks completed
            <div className="progress mt-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style={{ width: `${progress.tasksCompleted * 20}%` }}
                aria-valuenow={progress.tasksCompleted}
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
