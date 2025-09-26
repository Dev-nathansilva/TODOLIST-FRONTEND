import { useState, useEffect } from "react";
import { Task, CreateTaskData, UpdateTaskData } from "@/types/todo";
import { todoService } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

export const useTodos = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const { toast } = useToast();

  // Load tasks
  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await todoService.getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as tarefas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Create task
  const createTask = async (data: CreateTaskData): Promise<void> => {
    try {
      setActionLoading(true);
      const newTask = await todoService.createTask(data);
      setTasks((prev) => [newTask, ...prev]);
      toast({
        title: "Sucesso!",
        description: "Tarefa criada com sucesso.",
      });
    } catch (error) {
      console.error("Error creating task:", error);
      toast({
        title: "Erro",
        description: "Não foi possível criar a tarefa. Tente novamente.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setActionLoading(false);
    }
  };

  // Update task
  const updateTask = async (
    id: string,
    data: UpdateTaskData
  ): Promise<void> => {
    try {
      setActionLoading(true);
      const updatedTask = await todoService.updateTask(id, data);
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
      toast({
        title: "Sucesso!",
        description: "Tarefa atualizada com sucesso.",
      });
    } catch (error) {
      console.error("Error updating task:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar a tarefa. Tente novamente.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setActionLoading(false);
    }
  };

  // Delete task
  const deleteTask = async (id: string): Promise<void> => {
    if (!window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      return;
    }

    try {
      setActionLoading(true);
      await todoService.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      toast({
        title: "Sucesso!",
        description: "Tarefa excluída com sucesso.",
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir a tarefa. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setActionLoading(false);
    }
  };

  // Load tasks on mount
  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    actionLoading,
    createTask,
    updateTask,
    deleteTask,
    refreshTasks: loadTasks,
  };
};
