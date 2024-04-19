import { tasks } from '../data/data';

// Function to randomly assign 5 tasks to a robot
export const assignFiveRandomTasks = () => {
    const shuffledTasks = tasks.sort(() => Math.random() - 0.5);
    return shuffledTasks.slice(0, 5);
  };