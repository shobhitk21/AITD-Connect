import { useState } from 'react';
import { BookOpen, Brain, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import QuizComponent from '@/components/QuizComponent';
import { quizzes, subjects } from '@/data/dummyData';
import { cn } from '@/lib/utils';

export default function Practice() {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(null);

  const availableSubjects = subjects.filter((subject) => quizzes[subject]);

  const handleStartQuiz = () => {
    if (selectedSubject && quizzes[selectedSubject]) {
      setQuizStarted(true);
      setLastScore(null);
    }
  };

  const handleQuizComplete = (score: number) => {
    setLastScore(score);
  };

  const handleReset = () => {
    setQuizStarted(false);
    setLastScore(null);
  };

  const handleNewQuiz = () => {
    setQuizStarted(false);
    setSelectedSubject('');
    setLastScore(null);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              Practice & Assessment
            </h1>
            <p className="text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Test your knowledge with subject-wise quizzes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {!quizStarted ? (
            <>
              {/* Subject Selection */}
              <div className="card-premium animate-scale-in mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Brain className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Start a Quiz</h2>
                    <p className="text-sm text-muted-foreground">Choose a subject to begin</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Select Subject</label>
                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a subject..." />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSubjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            <span className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              {subject}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedSubject && quizzes[selectedSubject] && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border animate-fade-in">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-foreground">{selectedSubject}</p>
                          <p className="text-xs text-muted-foreground">
                            {quizzes[selectedSubject].questions.length} questions
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          Ready
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handleStartQuiz}
                    disabled={!selectedSubject}
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Brain className="h-5 w-5" />
                    Start Quiz
                  </Button>
                </div>
              </div>

              {/* Quiz Info Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: '📝', label: '5 Questions', desc: 'Per quiz' },
                  { icon: '⏱️', label: 'No Time Limit', desc: 'Take your time' },
                  { icon: '💡', label: 'Explanations', desc: 'Learn as you go' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="card-premium text-center opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-3xl mb-2 block">{item.icon}</span>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Previous Score */}
              {lastScore !== null && (
                <div className="mt-8 card-premium text-center animate-fade-in">
                  <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-lg font-semibold text-foreground">Last Score</p>
                  <p className="text-3xl font-bold text-accent">
                    {lastScore}/{quizzes[selectedSubject]?.questions.length || 5}
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <QuizComponent
                questions={quizzes[selectedSubject].questions}
                subject={selectedSubject}
                onComplete={handleQuizComplete}
                onReset={handleReset}
              />

              {lastScore !== null && (
                <div className="mt-6 text-center">
                  <Button variant="outline" onClick={handleNewQuiz} className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Try Different Subject
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
