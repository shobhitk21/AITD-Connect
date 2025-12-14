import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressCircleProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showLabel?: boolean;
  colorThreshold?: { low: number; high: number };
}

export default function ProgressCircle({
  value,
  size = 120,
  strokeWidth = 10,
  className,
  showLabel = true,
  colorThreshold = { low: 75, high: 85 },
}: ProgressCircleProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedValue / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const getColor = () => {
    if (value < colorThreshold.low) return 'stroke-destructive';
    if (value < colorThreshold.high) return 'stroke-accent';
    return 'stroke-green-500';
  };

  const getTextColor = () => {
    if (value < colorThreshold.low) return 'text-destructive';
    if (value < colorThreshold.high) return 'text-accent';
    return 'text-green-500';
  };

  return (
    <div className={cn("progress-circle", className)}>
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          className="progress-circle-bg"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className={cn("progress-circle-progress", getColor())}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 1.5s ease-out',
          }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-2xl font-bold", getTextColor())}>
            {Math.round(animatedValue)}%
          </span>
          <span className="text-xs text-muted-foreground">Attendance</span>
        </div>
      )}
    </div>
  );
}
