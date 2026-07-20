import React from 'react';
import TaskList from '../components/TaskList';
import sampleTasks from '../data/sampleTasks';

const Feature = () => {
  return (
    <div>
      <h2 className="mb-3">Task List</h2>
      <TaskList tasks={sampleTasks} />
    </div>
  );
};

export default Feature;