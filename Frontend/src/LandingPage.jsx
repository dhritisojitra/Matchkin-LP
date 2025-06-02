import React, { useState } from 'react';
import { Moon, Sun, Heart, Users, Sparkles, ArrowRight, Check, Mail, User, Shield, Zap, MessageSquare, X, Menu, Phone } from 'lucide-react';

// Main App component that renders the LandingPage
function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;

// LandingPage component
function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  // Toggles dark mode on and off
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handles the waitlist form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Show submission success message
    // Simulate an API call or processing time
    setTimeout(() => {
      setShowWaitlist(false); // Close the modal
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
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center`}>
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
              Matchkin
            </span>
          </div>

          {/* Navigation Links and Dark Mode Toggle */}
          <div className="flex items-center space-x-6">
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
            {[{
              icon: <Heart className="w-8 h-8 text-white" />,
              title: 'Soul-Deep Matching',
              text: 'Our AI analyzes personality traits, values, and life goals to find connections that go beyond surface-level attraction.',
              bg: 'from-pink-500 to-purple-600'
            }, {
              icon: <Users className="w-8 h-8 text-white" />,
              title: 'Quality Community',
              text: 'Curated community of genuine individuals looking for meaningful relationships, not just casual encounters.',
              bg: 'from-purple-500 to-blue-600'
            }, {
              icon: <Sparkles className="w-8 h-8 text-white" />,
              title: 'Privacy First',
              text: 'Your data stays secure with end-to-end encryption and complete control over your personal information.',
              bg: 'from-blue-500 to-pink-600'
            }].map((item, i) => (
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
      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-gray-700 bg-gray-800/30' : 'bg-white/50 border-gray-200'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <span className={`font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
              Matchkin
            </span>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Matchkin. Coming soon to revolutionize your love life.
          </p>
        </div>
      </footer>
    </div>
  );
}