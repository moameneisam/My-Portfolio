import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, 
  FaGithub, FaGitAlt, FaPython 
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJquery, SiJavascript } from 'react-icons/si';
import { FiMonitor, FiLayout, FiCode, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" size={26} />, bg: "rgba(227, 79, 38, 0.1)", border: "#E34F26" },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={26} />, bg: "rgba(21, 114, 182, 0.1)", border: "#1572B6" },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" size={26} />, bg: "rgba(247, 223, 30, 0.1)", border: "#F7DF1E" },
    { name: 'ECMAScript', icon: <SiJavascript color="#F7DF1E" size={24} />, bg: "rgba(247, 223, 30, 0.08)", border: "#F7DF1E" },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={24} />, bg: "rgba(49, 120, 198, 0.1)", border: "#3178C6" },
    { name: 'React.js', icon: <FaReact color="#61DAFB" size={26} />, bg: "rgba(97, 218, 251, 0.1)", border: "#61DAFB" },
    { name: 'Next.js', icon: <SiNextdotjs size={26} color="#9ca3af" />, bg: "rgba(156, 163, 175, 0.1)", border: "#9ca3af" },
    { name: 'jQuery', icon: <SiJquery color="#0769AD" size={26} />, bg: "rgba(7, 105, 173, 0.1)", border: "#0769AD" },
    { name: 'Python', icon: <FaPython color="#3776AB" size={26} />, bg: "rgba(55, 118, 171, 0.1)", border: "#3776AB" },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={26} />, bg: "rgba(121, 82, 179, 0.1)", border: "#7952B3" },
    { name: 'DOM Scripting', icon: <FiCode color="#20c997" size={26} />, bg: "rgba(32, 201, 151, 0.1)", border: "#20c997" },
    { name: 'Responsive Web', icon: <FiMonitor color="#0dcaf0" size={26} />, bg: "rgba(13, 202, 240, 0.1)", border: "#0dcaf0" },
    { name: 'UI / UX Design', icon: <FiLayout color="#ffc107" size={26} />, bg: "rgba(255, 193, 7, 0.1)", border: "#ffc107" },
    { name: 'Git', icon: <FaGitAlt color="#F05032" size={26} />, bg: "rgba(240, 80, 50, 0.1)", border: "#F05032" },
    { name: 'GitHub', icon: <FaGithub size={26} color="#9ca3af" />, bg: "rgba(156, 163, 175, 0.1)", border: "#9ca3af" },
    { name: 'VS Code', icon: <FiTerminal color="#007ACC" size={26} />, bg: "rgba(0, 122, 204, 0.1)", border: "#007ACC" },
  ];

  return (
    <section id="skills" className="py-5 position-relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="glow-bg-blob" style={{ left: '15%', bottom: '5%', background: 'rgba(6, 182, 212, 0.12)' }}></div>

      <div className="container py-5 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <h2 className="display-4 fw-bolder mb-3 text-gradient d-inline-block">Technical Skills </h2>
          <p className="lead text-body-secondary mt-2">The technologies, frameworks, and tools I use to build seamless experiences.</p>
        </motion.div>

        {/* Skill Capsules Grid */}
        <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 mt-5 px-md-5">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              
              // Gentle float/swimming animation
              animate={{ 
                x: [0, 8, -8, 0], 
                y: [0, -10, 5, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.03 },
                scale: { duration: 0.5, delay: index * 0.03 },
                x: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5 + (index % 2), repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              
              whileHover={{ 
                scale: 1.12, 
                zIndex: 10,
                boxShadow: `0 10px 25px -5px ${skill.border}40`,
                borderColor: skill.border,
                transition: { duration: 0.2 } 
              }} 
              
              className="d-flex align-items-center gap-3 px-4 py-3 rounded-pill glass-card skill-capsule"
              style={{ 
                cursor: 'pointer',
                backgroundColor: skill.bg,
                borderColor: 'var(--glass-border)',
              }}
            >
              <div className="d-flex align-items-center justify-content-center transition-all-custom">
                {skill.icon}
              </div>
              <span className="fw-bold fs-5 text-body">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;