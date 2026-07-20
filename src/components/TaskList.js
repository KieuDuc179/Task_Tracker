import React from 'react';
import TaskItemFunctional from './TaskItemFunctional';

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(({ id, ...rest }) => (
        <TaskItemFunctional
          key={`task-${id}`}
          task={{ id, ...rest }}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;