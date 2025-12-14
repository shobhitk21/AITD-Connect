import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  maxValue: number;
  label: string;
  className?: string;
  showValue?: boolean;
  delay?: number;
}

export default function ProgressBar({
  value,
  maxValue,
  label,
  className,
  showValue = true,
  delay = 0,
}: ProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const getColor = () => {
    if (percentage < 60) return 'bg-destructive';
    if (percentage < 80) return 'bg-accent';
    return 'bg-green-500';
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showValue && (
          <span className="text-sm text-muted-foreground">
            {value}/{maxValue}
          </span>
        )}
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            getColor()
          )}
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}
