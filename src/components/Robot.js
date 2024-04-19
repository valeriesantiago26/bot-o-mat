import React, { useState } from 'react';
import { robotTypes } from '../data/data';
import { assignFiveRandomTasks } from '../helpers/helpers';

function Robot({ setRobots, renewLeaderboard }) {
  const [robotsToCreate, setRobotsToCreate] = useState([{ name: '', robotType: '' }]);

  // Function to update the names for the robots
  const updateNameChange = (index, event) => {
    const updatedRobots = [...robotsToCreate];
    updatedRobots[index].name = event.target.value;
    setRobotsToCreate(updatedRobots);
  };

  // Function to update the types for the robots
  const updateRobotTypeChange = (index, event) => {
    const updatedRobots = [...robotsToCreate];
    updatedRobots[index].robotType = event.target.value;
    setRobotsToCreate(updatedRobots);
  };

  // Function to Create a new empty robot to the list
  const handleCreateRobot = () => {
    setRobotsToCreate([...robotsToCreate, { name: '', robotType: '' }]);
  };

  // Function to assign 5 random tasks to the new robot
  const handleCreateAllRobots = () => {
    // Clear the existing robots array if any
    setRobots([]);

    // Create all robots from the robotsToCreate list
    robotsToCreate.forEach((robot) => {
      const assignedTasks = assignFiveRandomTasks();

      const newRobot = {
        ...robot,
        completedTasks: [],
        selectedTasks: assignedTasks.map((task) => ({
          ...task,
          startTime: Date.now(),
        })),
      };

      // Create the new robot to the list of robots
      setRobots((prevRobots) => [...prevRobots, newRobot]);
    });

    // Clear the list of robots to create
    setRobotsToCreate([{ name: '', robotType: '' }]);

    // Renew the leaderboard each time Create All Robots is clicked
    renewLeaderboard();
  };

  return (
    <div className="form-container">
      <form>
        <h4>Create Robots</h4>
        <br />
        {robotsToCreate.map((robot, index) => (
          <div key={index} className="mb-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={robot.name}
              onChange={(event) => updateNameChange(index, event)}
            />
            <label>Robot Type:</label>
            <select
              className="form-control"
              value={robot.robotType}
              onChange={(event) => updateRobotTypeChange(index, event)}
            >
              <option value="">Select Robot Type</option>
              {Object.values(robotTypes).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <br />
          </div>
        ))}
        <div class="row">
          <div class="col text-center">
            <button type="button" className="btn btn-outline-primary mb-3" onClick={handleCreateRobot}>Add Robot</button>
          </div>
          <div class="col text-center">
            <button type="button" className="btn btn-primary" onClick={handleCreateAllRobots}>Add All Robots</button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Robot;
