import { Github, Linkedin, Mail, MapPin, ArrowDown, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Software Engineering Student';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pranav Subedi
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light h-10 flex items-center">
                <span>{displayedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Hi! I am a software engineering student currently studying at NCIT college Balkumari, Lalitpur.
              Passionate about building innovative solutions and exploring new technologies.
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={20} className="text-cyan-400" />
              <span>Kalanki, Kathmandu, Nepal</span>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/pranavsubedi12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:pranavsubedi12@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/pranavsubedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Instagram size={24} />
              </a>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300 w-80 h-80 mx-auto">
              <img
                src="/image.png"
                alt="Pranav Subedi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
