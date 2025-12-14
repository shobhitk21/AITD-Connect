import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, link, index = 0 }: FeatureCardProps) {
  return (
    <Link
      to={link}
      className={cn(
        "group card-premium flex flex-col items-center text-center opacity-0 animate-fade-in-up",
        "hover:border-accent/50"
      )}
      style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
        <Icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 text-sm font-medium text-accent opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
        Explore →
      </div>
    </Link>
  );
}
