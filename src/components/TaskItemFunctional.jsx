import React from 'react';

function TaskItemFunctional({ task }) {
  const { title, description, status, dueDate } = task;
  return (
    <div className="task-item">
      <h5>{title}</h5>
      <p>{description}</p>
      <span className={`badge ${status === 'done' ? 'bg-success' : 'bg-warning'}`}>
        {status}
      </span>
      <small className="text-muted d-block">Due: {dueDate}</small>
    </div>
  );
}

export default TaskItemFunctional;