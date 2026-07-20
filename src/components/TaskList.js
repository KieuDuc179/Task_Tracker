import React from 'react';
import TaskItemFunctional from './TaskItemFunctional';

// Arrow function component
const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(({ id, ...rest }) => (
        // destructuring task object, template literal cho key
        <TaskItemFunctional key={`task-${id}`} task={{ id, ...rest }} />
      ))}
    </div>
  );
};

export default TaskList;