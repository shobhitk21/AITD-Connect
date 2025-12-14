import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  programName: string;
  index: number;
  className?: string;
}

export default function ProgramCard({ programName, index, className }: ProgramCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-premium",
        "transition-all duration-300 hover:shadow-premium-lg hover:border-accent/50",
        "flex flex-col items-center text-center opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 transition-transform hover:scale-110">
        <GraduationCap className="h-7 w-7 text-accent" />
      </div>
      <h3 className="text-base font-semibold text-foreground leading-snug">
        {programName}
      </h3>
    </div>
  );
}
