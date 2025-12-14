import { useState, useEffect } from 'react';
import { 
  Building2, BookOpen, Award, Users, Briefcase, 
  GraduationCap, Wifi, Bus, Building, Heart,
  ChevronRight
} from 'lucide-react';
import { collegeInfo } from '@/data/dummyData';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'about', label: 'About AITD', icon: Building2 },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'infrastructure', label: 'Infrastructure', icon: Building },
  { id: 'placements', label: 'Placements', icon: Briefcase },
];

export default function CollegeInfo() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              About {collegeInfo.shortName}
            </h1>
            <p className="text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Empowering Divyangjan through quality technical education since {collegeInfo.established}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                      activeSection === section.id
                        ? "bg-accent/10 text-accent border-l-2 border-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl space-y-16">
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">About AITD</h2>
              </div>

              <div className="card-premium space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {collegeInfo.about}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium text-foreground">{collegeInfo.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Affiliated To</p>
                      <p className="font-medium text-foreground">{collegeInfo.affiliation}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">{collegeInfo.vision}</p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">{collegeInfo.mission}</p>
                </div>
              </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Courses Offered</h2>
              </div>

              <div className="space-y-6">
                {/* Diploma Courses */}
                <div className="card-premium">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                      DIPLOMA
                    </span>
                    Diploma Programs
                  </h3>
                  <div className="space-y-3">
                    {collegeInfo.courses.diploma.map((course, index) => (
                      <div
                        key={course.name}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span className="font-medium text-foreground">{course.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{course.duration}</span>
                          <span className="px-2 py-0.5 bg-background rounded text-xs">
                            Intake: {course.intake}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* B.Tech Courses */}
                <div className="card-premium">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      B.TECH
                    </span>
                    Bachelor of Technology Programs
                  </h3>
                  <div className="space-y-3">
                    {collegeInfo.courses.btech.map((course, index) => (
                      <div
                        key={course.name}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 text-accent" />
                          <span className="font-medium text-foreground">{course.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{course.duration}</span>
                          <span className="px-2 py-0.5 bg-background rounded text-xs">
                            Intake: {course.intake}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Infrastructure Section */}
            <section id="infrastructure" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Building className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Infrastructure & Facilities</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {collegeInfo.infrastructure.map((item, index) => {
                  const icons: Record<string, any> = {
                    'Barrier-Free Campus': Building2,
                    'Smart Classrooms': BookOpen,
                    'Computer Labs': GraduationCap,
                    '24/7 Wi-Fi': Wifi,
                    'Accessible Library': BookOpen,
                    'Hostel Facilities': Building,
                    'Medical Center': Heart,
                    'Accessible Transport': Bus,
                  };
                  const Icon = icons[item.name] || Building;

                  return (
                    <div
                      key={item.name}
                      className="card-premium flex items-start gap-4 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Placements Section */}
            <section id="placements" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Training & Placement Cell</h2>
              </div>

              <div className="card-premium">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Average Package', value: collegeInfo.placements.averagePackage },
                    { label: 'Highest Package', value: collegeInfo.placements.highestPackage },
                    { label: 'Placement Rate', value: collegeInfo.placements.placementRate },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-lg bg-muted/50 opacity-0 animate-count-up"
                      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                    >
                      <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recruiters */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    Top Recruiters
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {collegeInfo.placements.topRecruiters.map((company, index) => (
                      <span
                        key={company}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground border border-border hover:border-accent transition-colors opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
