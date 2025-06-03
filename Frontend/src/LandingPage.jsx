import React, { useState } from 'react';
import { Moon, Sun, Heart, Users, Sparkles, ArrowRight, Check, Mail, User, Shield, Zap, MessageSquare, X, Menu, Phone, Briefcase, UserCheck, Cpu, Brain, Lightbulb, Instagram, Linkedin, Twitter } from 'lucide-react'; // Added social icons


function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showAiDemo, setShowAiDemo] = useState(true); // New state for the AI demo toggle

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handles the waitlist form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Show submission success message
    // Simulate an API call or processing time
    setTimeout(() => {
      setShowWaitlist(false); 
      setSubmitted(false); // Reset submitted state
      setFormData({ name: '', email: '', interest: '' }); // Clear form data
    }, 2000); // Hide after 2 seconds
  };

  return (
    // Main container div with dynamic background based on dark mode
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50'} font-inter`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
              Matchkin
            </span>
          </div>

          {/* Navigation Links and Dark Mode Toggle */}
          <div className="flex items-center space-x-6">
            <a href="#consultants" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              For Consultants
            </a>
            <a href="#clients" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              For Clients
            </a>
            <a href="#how-it-works" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              How It Works
            </a>
            <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              About
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:scale-110 transition-all duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-pink-300/20">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className={`text-sm ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
              The future of meaningful connections
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight`}>
            Find Your<br />Perfect Match
          </h1>

          {/* Subheading/Description */}
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Revolutionary AI-powered matchmaking that understands your soul, not just your swipes.
            Connect with people who truly resonate with your energy.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowWaitlist(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 flex items-center space-x-2"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className={`px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
            }`}>
              Learn More
            </button>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 animate-ping delay-2000"></div>
        </div>
      </section>

      {/* For Consultants Section */}
      <section id="consultants" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
            For Consultants
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Expand your reach and connect with projects that truly match your expertise.
            Our AI engine intelligently pairs your skills with the right opportunities, enhancing your career growth.
          </p>
          <div className="mt-10 flex justify-center">
            <Briefcase className={`w-20 h-20 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section id="clients" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent`}>
            For Clients
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Find the perfect expertise for your projects without the hassle. Our AI identifies top-tier consultants
            who align with your specific needs, company culture, and project vision, ensuring successful outcomes.
          </p>
          <div className="mt-10 flex justify-center">
            <UserCheck className={`w-20 h-20 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
        </div>
      </section>

      {/* How It Works Section - AI Matching Visualization (Enhanced & Responsive) */}
      <section id="how-it-works" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            THE ART & SCIENCE OF AI MATCHING
          </h2>
          <p className={`text-xl mb-16 max-w-4xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our intelligent engine goes beyond keywords, analyzing intricate details, behavioral patterns, and cultural nuances
            to forge connections that are not just accurate, but truly symbiotic.
          </p>

          {/* Unique Feature: AI Matching Demo Toggle */}
          <div className="mb-12">
            <button
              onClick={() => setShowAiDemo(!showAiDemo)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg'
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-800 border border-purple-300'
              }`}
            >
              {showAiDemo ? 'Hide AI Matching Demo' : 'Show AI Matching Demo'}
            </button>
          </div>

          {showAiDemo ? (
            <div className="relative grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-16 md:gap-8 min-h-[700px] md:min-h-[500px]">

              {/* Left Side: Project/Skill Cards */}
              <div className="flex flex-col space-y-8">
                {[
                  { id: 'proj-1', title: 'AI Chatbot Dev', skills: ['NLP', 'Python'], difficulty: 'High', color: 'pink' },
                  { id: 'proj-2', title: 'Cloud Migration Strategy', skills: ['AWS', 'Azure'], difficulty: 'Medium', color: 'purple' },
                  { id: 'proj-3', title: 'Data Analytics Platform', skills: ['SQL', 'Tableau'], difficulty: 'High', color: 'blue' },
                ].map((item, index) => (
                  <div key={item.id} id={item.id} className={`group p-4 rounded-xl shadow-lg text-left w-64 md:w-60 transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80 text-gray-200 border-gray-700' : 'bg-white/80 text-gray-800 border-gray-200'} backdrop-blur-sm border`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className={`w-5 h-5 text-${item.color}-400`} />
                      <span className="font-semibold text-lg">{item.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm mb-2">
                      {item.skills.map((skill, sIndex) => (
                        <span key={sIndex} className={`px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Difficulty: <span className="font-medium text-pink-400">{item.difficulty}</span></p>
                  </div>
                ))}
              </div>

              {/* AI Matching Engine & its associated elements (Central Column) */}
              <div className="relative flex flex-col items-center justify-center min-h-[250px] w-full">
                {/* AI Engine Sub-points */}
                <div className={`absolute top-0 md:-top-16 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Brain className="w-4 h-4 inline-block mr-1 text-purple-400" /> Deep Learning Analytics
                </div>
                <div className={`absolute left-0 md:-left-24 text-sm text-right ${darkMode ? 'text-gray-400' : 'text-gray-600'} hidden md:block`}>
                    Contextual Understanding <Lightbulb className="w-4 h-4 inline-block ml-1 text-yellow-400" />
                </div>
                <div className={`absolute right-0 md:-right-24 text-sm text-left ${darkMode ? 'text-gray-400' : 'text-gray-600'} hidden md:block`}>
                    <Users className="w-4 h-4 inline-block mr-1 text-cyan-400" /> Behavioral Profiling
                </div>

                {/* AI Matching Engine */}
                <div className={`relative z-20 w-48 h-48 rounded-full flex items-center justify-center flex-col shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gradient-to-br from-orange-600 to-red-700 text-white ring-8 ring-orange-500/30' : 'bg-gradient-to-br from-orange-500 to-red-600 text-white ring-8 ring-orange-400/30'} hover:scale-105 animate-pulse-ring`}>
                  <Cpu className="w-16 h-16 mb-2 text-white/90" />
                  <span className="font-bold text-lg">AI Matching Engine</span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-dashed border-orange-300/50 animate-spin-slow"></div>
                </div>

                {/* Creative Matching Lines (Simplified & More Direct) */}
                {/* These lines are designed to appear to connect the AI engine to the project/consultant cards */}
                {/* Note: The exact 'top' percentages below are estimates and might need fine-tuning based on actual rendering. */}
                {/* Line 1: AI to Project 1 and Consultant 1 */}
                <div className="hidden md:block">
                  <div className={`absolute h-0.5 bg-gradient-to-r from-red-500/70 to-orange-500/70 top-[20%] left-1/2 -ml-0.5 transform -translate-x-full origin-right match-line-left-1 ${darkMode ? 'shadow-red-900' : 'shadow-red-300'}`}></div>
                  <div className={`absolute h-0.5 bg-gradient-to-l from-red-500/70 to-orange-500/70 top-[20%] left-1/2 ml-0.5 transform translate-x-0 origin-left match-line-right-1 ${darkMode ? 'shadow-red-900' : 'shadow-red-300'}`}></div>
                </div>

                {/* Line 2: AI to Project 2 and Consultant 2 */}
                <div className="hidden md:block">
                  <div className={`absolute h-0.5 bg-gradient-to-r from-purple-500/70 to-orange-500/70 top-[50%] left-1/2 -ml-0.5 transform -translate-x-full origin-right match-line-left-2 ${darkMode ? 'shadow-purple-900' : 'shadow-purple-300'}`}></div>
                  <div className={`absolute h-0.5 bg-gradient-to-l from-purple-500/70 to-orange-500/70 top-[50%] left-1/2 ml-0.5 transform translate-x-0 origin-left match-line-right-2 ${darkMode ? 'shadow-purple-900' : 'shadow-purple-300'}`}></div>
                </div>

                {/* Line 3: AI to Project 3 and Consultant 3 */}
                <div className="hidden md:block">
                  <div className={`absolute h-0.5 bg-gradient-to-r from-blue-500/70 to-orange-500/70 top-[80%] left-1/2 -ml-0.5 transform -translate-x-full origin-right match-line-left-3 ${darkMode ? 'shadow-blue-900' : 'shadow-blue-300'}`}></div>
                  <div className={`absolute h-0.5 bg-gradient-to-l from-blue-500/70 to-orange-500/70 top-[80%] left-1/2 ml-0.5 transform translate-x-0 origin-left match-line-right-3 ${darkMode ? 'shadow-blue-900' : 'shadow-blue-300'}`}></div>
                </div>

                <style jsx>{`
                  @keyframes pulse-ring {
                    0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.5); }
                    70% { box-shadow: 0 0 0 20px rgba(249, 115, 22, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
                  }
                  @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }

                  /* New animations for matching lines */
                  @keyframes draw-line-left {
                    0%, 100% { width: 0; opacity: 0; }
                    10% { opacity: 1; }
                    50% { width: 100px; opacity: 1; } /* Fixed width for connection to central circle */
                    90% { opacity: 1; }
                  }

                  @keyframes draw-line-right {
                    0%, 100% { width: 0; opacity: 0; }
                    10% { opacity: 1; }
                    50% { width: 100px; opacity: 1; } /* Fixed width for connection from central circle */
                    90% { opacity: 1; }
                  }

                  .animate-pulse-ring {
                    animation: pulse-ring 2s infinite;
                  }
                  .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                  }

                  /* Apply animations to matching lines with staggered delays */
                  .match-line-left-1 { animation: draw-line-left 6s ease-in-out infinite; animation-delay: 0s; }
                  .match-line-right-1 { animation: draw-line-right 6s ease-in-out infinite; animation-delay: 0s; }

                  .match-line-left-2 { animation: draw-line-left 6s ease-in-out infinite; animation-delay: 2s; }
                  .match-line-right-2 { animation: draw-line-right 6s ease-in-out infinite; animation-delay: 2s; }

                  .match-line-left-3 { animation: draw-line-left 6s ease-in-out infinite; animation-delay: 4s; }
                  .match-line-right-3 { animation: draw-line-right 6s ease-in-out infinite; animation-delay: 4s; }

                  /* Responsive adjustments for sub-points on smaller screens */
                  @media (max-width: 767px) {
                    .relative.flex-col.items-center.justify-center.min-h-\\[250px\\].w-full {
                      min-height: 300px; /* Give more vertical space for stacked content */
                    }
                    .absolute.top-0.md\\:-top-16 {
                      top: -50px; /* Adjust if it still overlaps with h2 */
                    }
                  }
                `}</style>
              </div>

              {/* Right Side: Consultant Cards */}
              <div className="flex flex-col space-y-8">
                {[
                  { id: 'cons-1', name: 'Alice Johnson', skills: ['Python', 'ML'], level: 'Expert', color: 'cyan' },
                  { id: 'cons-2', name: 'Bob Williams', skills: ['Azure', 'Security'], level: 'Senior', color: 'green' },
                  { id: 'cons-3', name: 'Charlie Brown', skills: ['React', 'Node'], level: 'Mid-Level', color: 'yellow' },
                ].map((item, index) => (
                  <div key={item.id} id={item.id} className={`group p-4 rounded-xl shadow-lg text-left w-64 md:w-60 transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800/80 text-gray-200 border-gray-700' : 'bg-white/80 text-gray-800 border-gray-200'} backdrop-blur-sm border`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <User className={`w-5 h-5 text-${item.color}-400`} />
                      <span className="font-semibold text-lg">{item.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm mb-2">
                      {item.skills.map((skill, sIndex) => (
                        <span key={sIndex} className={`px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Level: <span className="font-medium text-purple-400">{item.level}</span></p>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} text-center max-w-2xl mx-auto transition-all duration-500`}>
              <Sparkles className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Discover how our advanced AI seamlessly connects projects with the perfect consultants.
                Click "Show AI Matching Demo" to see the magic in action!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
              About Matchkin
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We're reimagining how people connect in the digital age, creating authentic relationships
              through advanced AI and deep personality understanding.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: 'Soul-Deep Matching',
                text: 'Our AI analyzes personality traits, values, and life goals to find connections that go beyond surface-level attraction.',
                bg: 'from-pink-500 to-purple-600'
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: 'Quality Community',
                text: 'Curated community of genuine individuals looking for meaningful relationships, not just casual encounters.',
                bg: 'from-purple-500 to-blue-600'
              },
              {
                icon: <Sparkles className="w-8 h-8 text-white" />,
                title: 'Privacy First',
                text: 'Your data stays secure with end-to-end encryption and complete control over your personal information.',
                bg: 'from-blue-500 to-pink-600'
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-all duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to find your person?
          </h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of people already on our waitlist. Be the first to experience the future of dating.
          </p>
          <button
            onClick={() => setShowWaitlist(true)}
            className="group px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 flex items-center space-x-3 mx-auto"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className={`w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 relative`}>
            <button
              onClick={() => setShowWaitlist(false)}
              className={`absolute top-4 right-4 w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} flex items-center justify-center hover:scale-110 transition-all`}
              aria-label="Close waitlist modal"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Join the Waitlist
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Be among the first to experience Matchkin
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                        aria-label="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                        aria-label="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="What excites you most about Matchkin? (optional)"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className={`w-full px-4 py-4 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none`}
                      rows="3"
                      aria-label="What excites you most about Matchkin?"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                  >
                    Join Waitlist
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Welcome to Matchkin!
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  You're on the list. We'll be in touch soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-800/30 text-gray-400' : 'bg-[#F9F3E7] text-gray-600'} backdrop-blur-sm`}> {/* Adjusted background for light mode based on image */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© 2025 Matchkin. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-6">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
            </nav>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className={`w-6 h-6 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className={`w-6 h-6 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className={`w-6 h-6 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;