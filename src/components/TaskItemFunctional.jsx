import React from 'react';
import '../css/TaskItem.css';

function TaskItemFunctional({ task, onToggleStatus, onDelete }) {
  const { id, title, description, status, dueDate } = task;
  return (
    <div className="task-item">
      <h5>{title}</h5>
      <p>{description}</p>
      <span className={`badge ${status === 'done' ? 'bg-success' : 'bg-warning'}`}>
        {status}
      </span>
      <small className="text-muted d-block mb-2">Due: {dueDate}</small>
      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onToggleStatus(id)}>
        Toggle Status
      </button>
      <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItemFunctional;