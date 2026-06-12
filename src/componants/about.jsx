import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';
import WhatIDoIllustration from '../assets/what-i-do.svg';

const About = () => {
  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  });

  return (
    <section id="about" className="py-5 overflow-hidden position-relative">
      <div className="glow-bg-blob" style={{ left: '50%', top: '30%', background: 'rgba(138, 43, 226, 0.12)' }}></div>

      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Animated Vector */}
          <motion.div 
            className="col-lg-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn('left')}
          >
            <div className="position-relative d-inline-block">
              {/* Soft lighting behind illustration */}
              <div className="position-absolute start-50 top-50 translate-middle rounded-circle" 
                   style={{ 
                     width: '90%', 
                     height: '90%', 
                     background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)', 
                     zIndex: -1 
                   }}></div>

              <motion.img 
                src={WhatIDoIllustration}
                alt="What I Do" 
                className="img-fluid" 
                style={{ maxWidth: '420px', filter: 'drop-shadow(0px 15px 35px rgba(99, 102, 241, 0.15))' }}
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Title and Details */}
          <motion.div 
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn('right')}
          >
            <h2 className="display-4 fw-extrabold mb-4 text-gradient">What I Do</h2><br />
              <span className="text-primary fw-bold text-uppercase tracking-wider mb-2 d-inline-block">
            My Core&nbsp;&nbsp;Focus
            </span>
            <p className="lead text-body-secondary mb-5">
             I love building functional, clean, and beautiful web interfaces. Bridging the gap between design concepts and production-ready code is my specialty.
            </p>

            {/* Service boxes */}
            <div className="d-flex flex-column gap-4">
              
              <div className="d-flex align-items-start gap-4 p-4 rounded-4 glass-card border-0">
                <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-primary d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                  <FiCode size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Web Development</h5>
                  <p className="text-body-secondary mb-0 fs-6">
                    Develop highly interactive, component-driven User Interfaces using modern libraries like React.js and Next.js.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-4 p-4 rounded-4 glass-card border-0">
                <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-primary d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                  <FiSmartphone size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Responsive Design</h5>
                  <p className="text-body-secondary mb-0 fs-6">
                    Craft pixel-perfect, mobile-first layouts that offer seamless user experiences across desktops, tablets, and smartphones.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-4 p-4 rounded-4 glass-card border-0">
                <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-primary d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                  <FiDatabase size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Integration & Architecture</h5>
                  <p className="text-body-secondary mb-0 fs-6">
                    Connecting frontend applications to RESTful APIs, managing states, and designing maintainable clean code architecture.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;