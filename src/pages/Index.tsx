import { ArrowRight, Sparkles, Users, BookOpen, Trophy, Zap } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation Hub",
      description: "Cutting-edge technology and research initiatives driving the future of education"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Learning",
      description: "Foster teamwork and knowledge sharing through interactive platforms"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Comprehensive resources and tools for outstanding academic performance"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievement Tracking",
      description: "Monitor progress and celebrate milestones in your academic journey"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Solutions",
      description: "AI-powered tools to enhance learning and administrative efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header with Logos */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://aitd.ac.in/OImages/AITH.jpg" 
            alt="AITD College Logo" 
            className="h-20 object-contain"
          />
          <div className="flex items-center gap-4">
            <img 
              src="https://aitd.ac.in/images/logo.png" 
              alt="AITD Banner" 
              className="h-16 object-contain"
            />
          </div>
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Welcome to <span className="text-blue-600">AITD SPARK</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Empowering education through innovative digital solutions. 
          Experience the future of learning with our comprehensive platform.
        </p>
        <a 
          href="https://aitd-spark.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Launch Platform
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Our Main Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose AITD SPARK?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Active Students</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Faculty Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Platform Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Join the future of education with AITD SPARK today
        </p>
        <a 
          href="https://aitd-spark.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          Access Platform
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AITD. All rights reserved.</p>
          <p className="mt-2 text-sm">Empowering education through innovation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;