import { Link } from 'react-router-dom';
import { 
  Eye, Keyboard, Volume2, Monitor, 
  ExternalLink, BookOpen, FileText, Headphones 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { accessibilityResources, easyReadNotes } from '@/data/dummyData';
import { cn } from '@/lib/utils';

export default function AccessibilitySupport() {
  const { isHighContrast, toggleHighContrast } = useTheme();

  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'High Contrast Mode',
      description: 'Enhanced color contrast for better visibility',
      action: 'Toggle High Contrast',
      onClick: toggleHighContrast,
      isActive: isHighContrast,
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Navigate the entire site using keyboard only',
      info: 'Use Tab, Enter, and Arrow keys',
    },
    {
      icon: Volume2,
      title: 'Screen Reader Compatible',
      description: 'Optimized for NVDA, JAWS, and VoiceOver',
      info: 'Semantic HTML and ARIA labels',
    },
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Works on all devices and screen sizes',
      info: 'Mobile-friendly interface',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              Accessible Learning Support
            </h1>
            <p className="text-primary-foreground/80 text-lg opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Designed with WCAG 2.1 AA/AAA principles to support all students
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Intro Message */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-premium border-2 border-accent/30 bg-accent/5">
            <p className="text-lg text-foreground leading-relaxed">
              This section is designed with <strong>WCAG 2.1 AA/AAA</strong> principles to support all students, 
              particularly those with learning challenges. Use the <strong>High-Contrast toggle</strong> in the 
              header for maximum readability. All content is optimized for screen readers and keyboard navigation.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Eye className="h-6 w-6 text-accent" />
            Accessibility Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "card-premium flex flex-col opacity-0 animate-fade-in",
                    feature.isActive && "border-accent bg-accent/5"
                  )}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0",
                      feature.isActive ? "bg-accent text-accent-foreground" : "bg-accent/10"
                    )}>
                      <Icon className={cn("h-6 w-6", !feature.isActive && "text-accent")} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  {feature.action ? (
                    <Button
                      onClick={feature.onClick}
                      variant={feature.isActive ? "default" : "outline"}
                      className="mt-auto"
                    >
                      {feature.isActive ? '✓ Enabled' : feature.action}
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-auto pt-4 border-t border-border">
                      {feature.info}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Easy Read Notes */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-accent" />
            Easy-Read Notes
          </h2>

          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-6">{easyReadNotes.title}</h3>
            
            <div className="space-y-8">
              {easyReadNotes.content.map((section, index) => (
                <div
                  key={section.heading}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <h4 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm">
                      {index + 1}
                    </span>
                    {section.heading}
                  </h4>
                  <ul className="space-y-2 ml-8">
                    {section.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice-Friendly Scripts */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Headphones className="h-6 w-6 text-accent" />
            Voice-Friendly Content
          </h2>

          <div className="card-premium">
            <p className="text-muted-foreground mb-6">
              The following content is formatted for optimal screen reader experience. 
              Clear headings, concise language, and logical structure make navigation easy.
            </p>

            <div className="p-6 rounded-lg bg-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Introduction to Arrays
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Definition:</strong> An array is a collection of elements 
                  stored at contiguous memory locations. All elements must be of the same data type.
                </p>
                <p>
                  <strong className="text-foreground">Key Characteristics:</strong> Arrays have a fixed size 
                  determined at creation. Elements are accessed using an index, starting from zero.
                </p>
                <p>
                  <strong className="text-foreground">Common Operations:</strong> Access by index takes constant time. 
                  Insertion and deletion may require shifting elements.
                </p>
                <p>
                  <strong className="text-foreground">Example:</strong> In an array of five numbers: 10, 20, 30, 40, 50. 
                  The first element at index zero is 10. The last element at index four is 50.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-accent" />
            Accessibility Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {accessibilityResources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium group hover:border-accent/50 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
