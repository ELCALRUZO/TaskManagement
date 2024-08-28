import axios from 'axios';

const API_URL = 'http://localhost:5081/api'; // Replace with your API URL

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

// Rename the updateTask function to avoid conflict
export const updateTaskInService = async (task) => {
  const response = await axios.put(`${API_URL}/tasks/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};

