import { FaExternalLinkAlt, FaCode, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clinicImg from '../assets/clinic.png';
import yalaImg from '../assets/yala.png';
import v1Img from '../assets/v1.png';

const Projects = () => {
  const techDetails = {
    "HTML": { icon: <FaHtml5 />, color: "#E34F26", bg: "rgba(227, 79, 38, 0.12)" },
    "CSS": { icon: <FaCss3Alt />, color: "#1572B6", bg: "rgba(21, 114, 182, 0.12)" },
    "JS": { icon: <FaJsSquare />, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.12)" },
    "Bootstrap": { icon: <FaBootstrap />, color: "#7952B3", bg: "rgba(121, 82, 179, 0.12)" },
    "React": { icon: <FaReact />, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.12)" }
  };

  const portfolioProjects = [
    {
      title: "Clinic System",
      desc: "A comprehensive system for managing medical clinics, designed to facilitate appointment booking, patient data organization, and efficient clinic management with a modern, interactive user interface.",
      link: "https://mo-clinicsystem.netlify.app",
      tags: ["HTML", "CSS", "JS"],
      image: clinicImg
    },
    {
      title: "Yala Sharm",
      desc: "A comprehensive tourism platform dedicated to browsing and exploring tourist and recreational trips and activities in the city of Sharm El Sheikh with a smooth and attractive user experience.",
      link: "https://moamen-yala-sharm-184c67.netlify.app",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      image: yalaImg
    },
    {
      title: "V1 Portfolio",
      desc: "The first and basic version of my personal portfolio, which I developed using React to display my skills and completed projects in a simplified manner.",
      link: "https://moamenessam-profile-dev.netlify.app",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      image: v1Img
    }
  ];

  return (
    <section id="projects" className="py-5 position-relative">
      {/* Decorative Blob */}
      <div className="glow-bg-blob" style={{ left: '-5%', top: '40%', background: 'rgba(99, 102, 241, 0.15)' }}></div>

      <div className="container py-5">
        
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-4 fw-bolder mb-3 text-gradient d-inline-block">Featured Work</h2>
          <p className="lead text-body-secondary mt-2">A showcase of interactive web applications and personal projects.</p>
        </motion.div>

        <div className="row g-4 mt-2">
          {portfolioProjects.map((proj, index) => (
            <motion.div 
              key={index} 
              className="col-lg-4 col-md-6 d-flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card w-100 p-3 glass-card rounded-4 border-0 d-flex flex-column transition-all-custom">
                
                {/* Project Image Box */}
                <div className="overflow-hidden rounded-4 mb-3 position-relative" style={{ height: '220px' }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-100 h-100 object-fit-cover transition-all-custom"
                    style={{ transformOrigin: 'center' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Subtle code overlay icon */}
                  <div className="position-absolute top-0 end-0 m-3 bg-dark bg-opacity-70 text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                     <FaCode size={16} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="card-body p-0 d-flex flex-column flex-grow-1">
                  <h4 className="card-title fw-bold mb-2 text-body">{proj.title}</h4>
                  
                  <p className="card-text text-body-secondary fs-6 lh-lg mb-4 flex-grow-1">
                    {proj.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, idx) => {
                      const tech = techDetails[tag] || { icon: <FaCode />, color: "#888", bg: "rgba(136, 136, 136, 0.12)" };
                      return (
                        <span 
                          key={idx} 
                          className="project-tag py-2 px-3"
                          style={{ 
                            backgroundColor: tech.bg, 
                            color: tech.color,
                            border: `1px solid ${tech.color}25`
                          }}
                        >
                          {tech.icon}
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Link Button */}
                  <a href={proj.link} target="_blank" rel="noreferrer" className="btn btn-primary w-100 fw-bold py-3 rounded-pill mt-auto shadow-sm transition-all-custom">
                    Live Demo <FaExternalLinkAlt className="ms-2" size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;