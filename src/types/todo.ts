export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pendente" | "em progresso" | "finalizado";
  priority: "baixa" | "média" | "urgente";
  due_date: string;
  created_at?: string;
  updated_at?: string;
}

export type CreateTaskData = Omit<Task, "id" | "created_at" | "updated_at">;
export type UpdateTaskData = Partial<CreateTaskData>;
