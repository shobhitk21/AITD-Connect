import { useState } from 'react';
import { User, BookOpen, Calendar, Award, LogOut, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProgressCircle from '@/components/ProgressCircle';
import ProgressBar from '@/components/ProgressBar';
import { students, Student } from '@/data/dummyData';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [rollNo, setRollNo] = useState('');
  const [semester, setSemester] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const student = students.find(
      (s) => s.rollNo.toLowerCase() === rollNo.toLowerCase()
    );

    if (student) {
      setCurrentStudent(student);
      setIsLoggedIn(true);
    } else {
      setError('Student not found. Try: 2021CSE001, 2021CSE002, 2021IT001, or 2021ECE001');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentStudent(null);
    setRollNo('');
    setSemester('');
  };

  if (!isLoggedIn || !currentStudent) {
    return (
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-navy text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                Student Dashboard
              </h1>
              <p className="text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                Access your attendance, marks, and academic progress
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="card-premium animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Login to Dashboard</h2>
                  <p className="text-sm text-muted-foreground">Enter your credentials</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rollNo">Roll Number</Label>
                  <Input
                    id="rollNo"
                    type="text"
                    placeholder="e.g., 2021CSE001"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select value={semester} onValueChange={setSemester} required>
                    <SelectTrigger id="semester">
                      <SelectValue placeholder="Select Semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <SelectItem key={sem} value={String(sem)}>
                          Semester {sem}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full">
                  Access Dashboard
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Demo accounts: 2021CSE001, 2021CSE002, 2021IT001, 2021ECE001
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                Welcome, {currentStudent.name}!
              </h1>
              <p className="text-primary-foreground/80 text-sm">
                {currentStudent.branch} • Semester {currentStudent.semester}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 self-start"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card-premium opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                {currentStudent.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{currentStudent.name}</h2>
                <p className="text-sm text-muted-foreground">{currentStudent.rollNo}</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Branch', value: currentStudent.branch },
                { label: 'Semester', value: `Semester ${currentStudent.semester}` },
                { label: 'Email', value: currentStudent.email },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Card */}
          <div className="card-premium opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Attendance</h2>
            </div>

            <div className="flex justify-center mb-6">
              <ProgressCircle value={currentStudent.attendance} size={160} strokeWidth={12} />
            </div>

            <div className={cn(
              "p-3 rounded-lg text-center text-sm",
              currentStudent.attendance >= 75
                ? "bg-green-500/10 text-green-600"
                : "bg-destructive/10 text-destructive"
            )}>
              {currentStudent.attendance >= 75
                ? "✓ Attendance requirement met"
                : "⚠ Attendance below 75% - Improvement needed"
              }
            </div>
          </div>

          {/* CGPA Card */}
          <div className="card-premium opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Academic Performance</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-3xl font-bold text-accent">{currentStudent.sgpa}</p>
                <p className="text-sm text-muted-foreground">Current SGPA</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-3xl font-bold text-foreground">{currentStudent.cgpa}</p>
                <p className="text-sm text-muted-foreground">Overall CGPA</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>Performance trending upward this semester</span>
            </div>
          </div>
        </div>

        {/* Internal Marks Section */}
        <div className="mt-6">
          <div className="card-premium opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Internal Marks</h2>
                <p className="text-sm text-muted-foreground">Current semester subject-wise performance</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentStudent.subjects.map((subject, index) => (
                <div
                  key={subject.code}
                  className="p-4 rounded-lg bg-muted/30 border border-border opacity-0 animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-foreground">{subject.code}</span>
                    <span className={cn(
                      "text-xs font-medium px-2 py-0.5 rounded",
                      (subject.internalMarks / subject.maxMarks) * 100 >= 80
                        ? "bg-green-500/10 text-green-600"
                        : (subject.internalMarks / subject.maxMarks) * 100 >= 60
                          ? "bg-accent/10 text-accent"
                          : "bg-destructive/10 text-destructive"
                    )}>
                      {((subject.internalMarks / subject.maxMarks) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <ProgressBar
                    value={subject.internalMarks}
                    maxValue={subject.maxMarks}
                    label={subject.name}
                    delay={500 + index * 100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
