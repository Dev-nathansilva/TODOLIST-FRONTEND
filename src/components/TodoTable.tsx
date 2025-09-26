import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Edit, Trash2 } from "lucide-react";
import { Task } from "@/types/todo";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface TodoTableProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  loading?: boolean;
}

export const TodoTable = ({
  tasks,
  onEditTask,
  onDeleteTask,
  loading,
}: TodoTableProps) => {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd/MM/yyyy", { locale: ptBR });
    } catch {
      return "Data inválida";
    }
  };

  if (loading) {
    return (
      <Card className="w-full">
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">Carregando tarefas...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-muted/50">
            <TableHead className="w-12 text-center">Nº</TableHead>
            <TableHead className="min-w-[250px]">Informações</TableHead>
            <TableHead className="w-32">Status</TableHead>
            <TableHead className="w-32">Prioridade</TableHead>
            <TableHead className="w-32">Data</TableHead>
            <TableHead className="w-32 text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow
              key={task.id}
              className="hover:bg-muted/30 transition-colors"
            >
              <TableCell className="text-center font-medium text-muted-foreground">
                {index + 1}
              </TableCell>

              <TableCell>
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground leading-tight">
                    {task.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {task.description}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge variant="status" value={task.status} />
              </TableCell>

              <TableCell>
                <Badge variant="priority" value={task.priority} />
              </TableCell>

              <TableCell>
                <span className="text-sm text-foreground">
                  {formatDate(task.due_date)}
                </span>
              </TableCell>

              <TableCell>
                <div className="flex items-center justify-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEditTask(task)}
                    className="h-8 w-8 p-0 hover:bg-primary/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeleteTask(task.id)}
                    className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
