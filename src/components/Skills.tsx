import { Code2, Database, Layout, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-cyan-400" size={32} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'C'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-blue-400" size={32} />,
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Backend & Database',
      icon: <Database className="text-purple-400" size={32} />,
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Tools & Technologies',
      icon: <Cpu className="text-pink-400" size={32} />,
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Machine Learning', 'VS Code'],
      gradient: 'from-pink-500 to-red-600',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className={`inline-block p-3 bg-gradient-to-r ${category.gradient} rounded-lg mb-4`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Learning & Growth
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            As a software engineering student, I'm constantly expanding my skill set and staying updated
            with the latest technologies. I believe in hands-on learning and applying theoretical knowledge
            to practical projects. Currently exploring advanced topics in AI/ML, cloud computing, and
            full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
