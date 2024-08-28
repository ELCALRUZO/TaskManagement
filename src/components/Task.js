import React from 'react';
import '../styles/Task.css';

const Task = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className="task">
      <h4>{task.name}</h4>
      <p>Project: {task.project}</p>
      <p>Time: {task.time}</p>
      <p>Assigned to: {task.assignedUsers.join(', ')}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onComplete(task.id)}>Complete</button>
    </div>
  );
};

export default Task;
