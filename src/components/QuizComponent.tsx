import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X, Trophy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuizQuestion } from '@/data/dummyData';
import { cn } from '@/lib/utils';

interface QuizComponentProps {
  questions: QuizQuestion[];
  subject: string;
  onComplete: (score: number) => void;
  onReset: () => void;
}

export default function QuizComponent({ questions, subject, onComplete, onReset }: QuizComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelectAnswer = (optionIndex: number) => {
    if (showResults) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate score
      const score = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      setShowResults(true);
      onComplete(score);
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setShowExplanation(false);
    onReset();
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correctAnswer ? 1 : 0);
  }, 0);

  if (showResults) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="card-premium text-center animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/40 animate-bounce-subtle">
            <Trophy className={cn(
              "h-10 w-10",
              percentage >= 80 ? "text-green-500" : percentage >= 60 ? "text-accent" : "text-destructive"
            )} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-2">Quiz Complete!</h2>
        <p className="text-muted-foreground mb-6">{subject}</p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent">{score}</p>
            <p className="text-sm text-muted-foreground">Correct</p>
          </div>
          <div className="h-12 w-px bg-border"></div>
          <div className="text-center">
            <p className="text-4xl font-bold text-foreground">{questions.length}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
          <div className="h-12 w-px bg-border"></div>
          <div className="text-center">
            <p className={cn(
              "text-4xl font-bold",
              percentage >= 80 ? "text-green-500" : percentage >= 60 ? "text-accent" : "text-destructive"
            )}>
              {percentage.toFixed(0)}%
            </p>
            <p className="text-sm text-muted-foreground">Score</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          {percentage >= 80 
            ? "Excellent work! You have a strong grasp of this subject." 
            : percentage >= 60 
              ? "Good effort! Keep practicing to improve your understanding."
              : "Keep learning! Review the topics and try again."
          }
        </p>

        <Button onClick={handleReset} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="card-premium animate-fade-in">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-accent">{subject}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground leading-relaxed">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswers[currentIndex] === index;
          const isCorrect = index === currentQuestion.correctAnswer;
          const showCorrectness = showExplanation && isSelected;

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={showExplanation}
              className={cn(
                "w-full p-4 rounded-lg border-2 text-left transition-all duration-200",
                "flex items-center justify-between gap-3",
                !showExplanation && "hover:border-accent hover:bg-accent/5",
                isSelected && !showExplanation && "border-accent bg-accent/10",
                showCorrectness && isCorrect && "border-green-500 bg-green-500/10",
                showCorrectness && !isCorrect && "border-destructive bg-destructive/10",
                showExplanation && isCorrect && "border-green-500/50",
                showExplanation && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium flex-shrink-0",
                  isSelected && !showExplanation && "border-accent bg-accent text-accent-foreground",
                  showCorrectness && isCorrect && "border-green-500 bg-green-500 text-white",
                  showCorrectness && !isCorrect && "border-destructive bg-destructive text-white",
                  !isSelected && "border-border"
                )}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-foreground">{option}</span>
              </div>
              {showExplanation && isCorrect && (
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              )}
              {showCorrectness && !isCorrect && (
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="p-4 rounded-lg bg-muted/50 border border-border mb-6 animate-fade-in">
          <p className="text-sm font-medium text-foreground mb-1">Explanation:</p>
          <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedAnswers[currentIndex] === null}
          className="gap-2"
        >
          {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
