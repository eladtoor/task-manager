import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTasks = () => {
  return axios.get(`${API_URL}/tasks`);
};

export const createTask = (taskData) => {
  return axios.post(`${API_URL}/tasks`, taskData);
};

export const updateTask = (taskId, taskData) => {
  return axios.patch(`${API_URL}/tasks/${taskId}`, taskData);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`);
};
