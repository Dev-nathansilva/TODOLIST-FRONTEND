import axios from "axios";
import { Task, CreateTaskData, UpdateTaskData } from "@/types/todo";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoService = {
  // Get all tasks
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get("/tasks");
    return response.data;
  },

  // Get single task
  getTask: async (id: string): Promise<Task> => {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  },

  // Create task
  createTask: async (data: CreateTaskData): Promise<Task> => {
    const response = await api.post("/tasks", data);
    return response.data;
  },

  // Update task
  updateTask: async (id: string, data: UpdateTaskData): Promise<Task> => {
    const response = await api.put(`/tasks/${id}`, data);
    return response.data;
  },

  // Delete task
  deleteTask: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};
