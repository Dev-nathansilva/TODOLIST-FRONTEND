import { useState } from 'react';
import { Task } from '@/types/todo';
import { useTodos } from '@/hooks/useTodos';
import { Header } from '@/components/Header';
import { TodoTable } from '@/components/TodoTable';
import { TodoModal } from '@/components/TodoModal';
import { EmptyState } from '@/components/EmptyState';

const TodoApp = () => {
  const { tasks, loading, actionLoading, createTask, updateTask, deleteTask } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleCreateTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSubmitTask = async (data: any) => {
    if (editingTask) {
      await updateTask(editingTask.id, data);
    } else {
      await createTask(data);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCreateTask={handleCreateTask} />
      
      <main className="container px-6 py-8">
        {!loading && tasks.length === 0 ? (
          <EmptyState onCreateTask={handleCreateTask} />
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Minhas Tarefas
                </h2>
                <p className="text-muted-foreground">
                  {tasks.length} {tasks.length === 1 ? 'tarefa' : 'tarefas'} cadastrada{tasks.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            
            <TodoTable
              tasks={tasks}
              onEditTask={handleEditTask}
              onDeleteTask={deleteTask}
              loading={loading}
            />
          </div>
        )}
      </main>

      <TodoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTask}
        editingTask={editingTask}
        loading={actionLoading}
      />
    </div>
  );
};

export default TodoApp;