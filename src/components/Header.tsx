import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCreateTask: () => void;
}

export const Header = ({ onCreateTask }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b pb-16 sm:pb-0 pt-5 sm:pt-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex-col gap-3 sm:flex-row flex h-16 items-center justify-between px-6">
        <div className="flex flex-col">
          <h1 className="text-center sm:text-start text-2xl font-bold tracking-tight text-foreground">
            Todo List
          </h1>
          <p className="text-center sm:text-start text-sm text-muted-foreground">
            Gerencie suas tarefas de forma eficiente
          </p>
        </div>

        <Button onClick={onCreateTask} className="gap-2">
          <Plus className="h-4 w-4" />
          Criar Tarefa
        </Button>
      </div>
    </header>
  );
};
