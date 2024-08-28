import { createSlice } from '@reduxjs/toolkit';
import { getTasks, createTask, updateTaskInService, deleteTask } from '../services/taskService';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => [...state, action.payload],
    updateTask: (state, action) => state.map(task => task.id === action.payload.id ? action.payload : task),
    removeTask: (state, action) => state.filter(task => task.id !== action.payload),
  },
});

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;

export const fetchTasks = () => async dispatch => {
  const tasks = await getTasks();
  dispatch(setTasks(tasks));
};

export const createNewTask = task => async dispatch => {
  const newTask = await createTask(task);
  dispatch(addTask(newTask));
};

export const modifyTask = task => async dispatch => {
  const updatedTask = await updateTaskInService(task);
  dispatch(updateTask(updatedTask));
};

export const removeTaskById = id => async dispatch => {
  await deleteTask(id);
  dispatch(removeTask(id));
};

export default tasksSlice.reducer;
