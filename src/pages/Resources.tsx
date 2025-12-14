import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ResourceCard from '@/components/ResourceCard';
import GeminiChatAssistant from '@/components/GeminiChatAssistant';
import { resources, subjects } from '@/data/dummyData';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubject =
        selectedSubject === 'all' || resource.subject === selectedSubject;

      const matchesType =
        selectedType === 'all' || resource.type === selectedType;

      return matchesSearch && matchesSubject && matchesType;
    });
  }, [searchQuery, selectedSubject, selectedType]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSubject('all');
    setSelectedType('all');
  };

  const hasActiveFilters =
    searchQuery || selectedSubject !== 'all' || selectedType !== 'all';

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              Resources & AI Assistant
            </h1>
            <p className="text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Discover AI-curated learning resources and get instant help from Gemini
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Resources Section (Left) */}
          <div className="flex-1 lg:w-3/5">
            {/* Search & Filters */}
            <div className="card-premium mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search resources by title, topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Subject Filter */}
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Book">Book</SelectItem>
                    <SelectItem value="Video">Video</SelectItem>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Practice">Practice</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {searchQuery && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      "{searchQuery}"
                    </span>
                  )}
                  {selectedSubject !== 'all' && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {selectedSubject}
                    </span>
                  )}
                  {selectedType !== 'all' && (
                    <span className="px-2 py-1 bg-muted text-foreground text-xs rounded-full">
                      {selectedType}
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="ml-auto h-7 text-xs"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear all
                  </Button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredResources.length}</span> resources
              </p>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} />
                ))}
              </div>
            ) : (
              <div className="card-premium text-center py-12">
                <p className="text-muted-foreground mb-4">No resources found matching your criteria</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          {/* AI Assistant Section (Right) */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-24 h-[calc(100vh-8rem)]">
              <GeminiChatAssistant />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
