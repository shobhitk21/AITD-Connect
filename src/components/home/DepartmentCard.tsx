import { Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Department } from '@/types/institute';

interface DepartmentCardProps {
  department: Department;
  index: number;
  className?: string;
}

export default function DepartmentCard({ department, index, className }: DepartmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-premium",
        "transition-all duration-300 hover:shadow-premium-lg hover:border-accent/50",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Department Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {department.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-2 py-1 text-xs font-medium rounded",
                department.type === 'Degree'
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              )}
            >
              {department.type}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              {department.faculty.length} Faculty
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={isExpanded ? "Collapse faculty list" : "Expand faculty list"}
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Faculty List */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-3 animate-fade-in">
          {department.faculty.map((faculty, idx) => {
            const isHOD = faculty.designation.toLowerCase().includes('hod') || 
                         faculty.designation.toLowerCase().includes('incharge');
            
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  isHOD ? "bg-accent/5 border border-accent/20" : "bg-muted/30"
                )}
              >
                <div className="flex-1">
                  <p className={cn(
                    "font-medium",
                    isHOD ? "text-accent" : "text-foreground"
                  )}>
                    {faculty.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {faculty.designation}
                  </p>
                </div>
                {isHOD && (
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                    Lead
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
