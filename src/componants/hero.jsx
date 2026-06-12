import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import MyImage from '../assets/my-png.png';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center py-5 position-relative overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="glow-bg-blob" style={{ left: '-10%', top: '20%' }}></div>
      <div className="glow-bg-blob" style={{ right: '-5%', bottom: '10%', background: 'rgba(6, 182, 212, 0.15)' }}></div>

      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row g-5">

          {/* Left Column: Texts and Actions */}
          <div className="col-lg-6 text-center text-lg-start z-1">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 fs-6">
                Available for Projects & Training
              </span>

              <h1 className="display-3 fw-extrabold mb-3">
                Hello, I'm <span className="text-gradient fw-bolder">Moamen</span>
              </h1>

              <p className="lead text-body-secondary mb-4 fs-4" style={{ lineHeight: '1.6' }}>
                A passionate <strong className="text-body">Front-End Developer</strong> specializing in building responsive, high-performance web applications using JavaScript, React.js, Next.js, and modern tools.
              </p>

              {/* Social Buttons */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-5">
                <a href="https://github.com/moamen-pixel" target="_blank" rel="noreferrer" 
                   className="social-circle-btn" style={{ backgroundColor: '#24292e' }}
                   title="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/moamen-essam" target="_blank" rel="noreferrer" 
                   className="social-circle-btn" style={{ backgroundColor: '#0077b5' }}
                   title="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:moameneisam1@gmail.com" 
                   className="social-circle-btn" style={{ backgroundColor: '#ea4335' }}
                   title="Email">
                  <FaEnvelope size={20} />
                </a>
                <a href="https://wa.me/201090940804" target="_blank" rel="noreferrer" 
                   className="social-circle-btn" style={{ backgroundColor: '#25d366' }}
                   title="WhatsApp">
                  <FaWhatsapp size={20} />
                </a>
              </div>

              {/* Actions */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="https://wa.me/201090940804" target="_blank" rel="noreferrer" className="btn btn-primary px-4 py-3 rounded-pill fw-bold transition-all-custom shadow-sm">
                  Let's Chat
                </a>
                <a href="#projects" className="btn btn-outline-primary px-4 py-3 rounded-pill fw-bold transition-all-custom">
                  View Work
                </a>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="col-lg-6 text-center">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 50, 
                damping: 15, 
                duration: 1.2 
              }}
              className="position-relative d-inline-block"
            >
              {/* Radial gradient background behind illustration */}
              <div className="position-absolute start-50 top-50 translate-middle rounded-circle" 
                   style={{ 
                     width: '80%', 
                     height: '80%', 
                     background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', 
                     zIndex: -1, 
                   }}></div>

              <motion.img 
                src={MyImage}
                alt="Moamen Essam" 
                className="img-fluid rounded-5 shadow-lg" 
                style={{ 
                  maxWidth: '100%', 
                  width: '380px', 
                  height: '450px', 
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.25)'
                }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;