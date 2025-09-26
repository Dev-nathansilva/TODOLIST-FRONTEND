import { FileText, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onCreateTask: () => void;
}

export const EmptyState = ({ onCreateTask }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="rounded-full bg-muted p-4 mb-4">
        <FileText className="h-8 w-8 text-muted-foreground" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Nenhuma tarefa cadastrada
      </h3>
      
      <p className="text-muted-foreground text-center mb-6 max-w-sm">
        Comece criando sua primeira tarefa para organizar suas atividades.
      </p>
      
      <Button onClick={onCreateTask} className="gap-2">
        <Plus className="h-4 w-4" />
        Criar Primeira Tarefa
      </Button>
    </div>
  );
};