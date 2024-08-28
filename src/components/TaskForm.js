import { useState } from 'react'; 
import '../styles/TaskForm.css';
 

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    project: '',
    time: '',
    assignedUsers: [], // Ensure this is an array
    priority: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleAssignedUsersChange = (e) => {
    const users = e.target.value.split(',').map(user => user.trim());
    setTask(prevTask => ({
      ...prevTask,
      assignedUsers: users
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Task Name" 
        value={task.name} 
        onChange={handleInputChange} 
      />
      <input 
        type="text" 
        name="project" 
        placeholder="Project" 
        value={task.project} 
        onChange={handleInputChange} 
      />
      <input 
        type="time" 
        name="time" 
        placeholder="Time" 
        value={task.time} 
        onChange={handleInputChange} 
      />
      <input 
        type="text" 
        name="assignedUsers" 
        placeholder="Assigned Users (comma separated)" 
        value={task.assignedUsers.join(', ')} // Convert array to string for input
        onChange={handleAssignedUsersChange} 
      />
      <select 
        name="priority" 
        value={task.priority} 
        onChange={handleInputChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <textarea 
        name="notes" 
        placeholder="Notes" 
        value={task.notes} 
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
