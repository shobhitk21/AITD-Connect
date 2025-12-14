import { Book, Video, Globe, Code, Star, ExternalLink } from 'lucide-react';
import { Resource } from '@/data/dummyData';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
  index?: number;
}

const typeIcons = {
  Book: Book,
  Video: Video,
  Website: Globe,
  Practice: Code,
};

const typeColors = {
  Book: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  Video: 'bg-red-500/10 text-red-600 border-red-500/20',
  Website: 'bg-green-500/10 text-green-600 border-green-500/20',
  Practice: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
};

export default function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];

  return (
    <div
      className={cn(
        "group card-premium opacity-0 animate-fade-in",
        "hover:border-accent/50"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg border transition-transform group-hover:scale-110",
            typeColors[resource.type]
          )}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              AI Suggested: {resource.type}
            </span>
            <h3 className="text-lg font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
              {resource.title}
            </h3>
          </div>
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          aria-label={`Open ${resource.title}`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Author & Subject */}
      <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
        <span className="text-muted-foreground">by</span>
        <span className="font-medium text-foreground">{resource.author}</span>
        <span className="text-muted-foreground">•</span>
        <span className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
          {resource.subject}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {resource.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">
          Topic: <span className="text-foreground font-medium">{resource.topic}</span>
        </span>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-foreground">{resource.rating}</span>
        </div>
      </div>
    </div>
  );
}
