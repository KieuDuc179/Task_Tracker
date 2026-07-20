import React, { Component } from 'react';

class TaskItemClass extends Component {
  render() {
    const { title, description, status, dueDate } = this.props.task;
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
}

export default TaskItemClass;