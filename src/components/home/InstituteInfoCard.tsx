import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InstituteInfoCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  className?: string;
}

export default function InstituteInfoCard({ label, value, icon: Icon, className }: InstituteInfoCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-premium",
        "transition-all duration-300 hover:shadow-premium-lg hover:scale-105",
        "flex flex-col items-center text-center",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}
