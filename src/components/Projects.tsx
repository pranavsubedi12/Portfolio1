import { ExternalLink, Github, Brain, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ClassLens',
      description: 'An AI-driven system that monitors classroom attentiveness by analyzing student behavior in real-time. This innovative solution helps educators understand student engagement patterns.',
      tech: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/pranavsubedi12/ClassLens',
      icon: <Brain className="text-cyan-400" size={40} />,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'NP-Project',
      description: 'A systems programming project developed in C, focusing on network protocols and low-level programming concepts. Demonstrates strong understanding of computer networks.',
      tech: ['C', 'Network Programming', 'Systems Development'],
      github: 'https://github.com/pranavsubedi12/NP-Project',
      icon: <Code className="text-blue-400" size={40} />,
      gradient: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all transform hover:scale-105"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-all transform hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/pranavsubedi12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
