import { GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-cyan-400" size={32} />,
      title: 'Education',
      description: 'Software Engineering Student at NCIT College, Balkumari, Lalitpur',
    },
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Development',
      description: 'Passionate about creating innovative solutions using modern technologies',
    },
    {
      icon: <Briefcase className="text-purple-400" size={32} />,
      title: 'Projects',
      description: 'Working on AI-driven systems and various software applications',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm Pranav Subedi, a dedicated software engineering student.
              Currently pursuing my studies at NCIT College in Balkumari, Lalitpur, I'm passionate about
              leveraging technology to solve real-world problems.
            </p>
            <p>
              My journey in software development has been driven by curiosity and a desire to create
              meaningful applications. From AI-driven classroom monitoring systems to various web applications,
              I enjoy exploring new technologies and pushing the boundaries of what's possible.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest trends in software
              development. Whether it's working on complex algorithms or designing intuitive user interfaces,
              I strive for excellence in every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
