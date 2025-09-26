import { cn } from '@/lib/utils';

interface BadgeProps {
  variant: 'status' | 'priority';
  value: string;
  className?: string;
}

export const Badge = ({ variant, value, className }: BadgeProps) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'pendente':
        return 'bg-status-pending text-status-pending-foreground';
      case 'em progresso':
        return 'bg-status-progress text-status-progress-foreground';
      case 'finalizado':
        return 'bg-status-completed text-status-completed-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'baixa':
        return 'bg-priority-low text-priority-low-foreground';
      case 'média':
        return 'bg-priority-medium text-priority-medium-foreground';
      case 'urgente':
        return 'bg-priority-urgent text-priority-urgent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors';
  const variantStyles = variant === 'status' ? getStatusStyles(value) : getPriorityStyles(value);

  return (
    <span className={cn(baseStyles, variantStyles, className)}>
      {value}
    </span>
  );
};