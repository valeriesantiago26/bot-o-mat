import React, { useState, useEffect } from 'react';
import Robot from '../components/Robot';
import Leaderboard from '../components/Leaderboard';
import Navbar from '../components/Navbar'; 
import '../styles/styles.css';

function App() {
  const [robots, setRobots] = useState([]);

  // Function to renew the leaderboard and clear completed tasks
  const renewLeaderboard = () => {
    setRobots((prevRobots) => prevRobots.map((robot) => ({
      ...robot,
      completedTasks: []
    })));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRobots((prevRobots) =>
        prevRobots.map((robot) => {
          const updatedTasks = robot.selectedTasks.filter((task) => Date.now() - task.startTime < task.eta);
          const completedTasks = robot.selectedTasks.filter((task) => Date.now() - task.startTime >= task.eta);

          return {
            ...robot, selectedTasks: updatedTasks, completedTasks: [...robot.completedTasks, ...completedTasks],
          };
        })
      );
    }, 1000); // This checks for task completion every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Navbar /> 
      <div className="App">
        <h1 className='text-center'>Hello, Red Ventures</h1>
        <br />
        <Robot setRobots={setRobots} renewLeaderboard={renewLeaderboard} />
        <Leaderboard robots={robots} setRobots={setRobots} />
      </div>
    </div>

  );
}

export default App;
