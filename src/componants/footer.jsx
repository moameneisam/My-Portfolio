import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 mt-5" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row gap-4 gap-md-0">
          
          {/* Logo & Copyright */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-extrabold text-gradient mb-1 fs-4">Moamen Essam</h5>
            <p className="text-body-secondary small mb-0">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 d-flex justify-content-center gap-3">
            <a href="https://github.com/moamen-pixel" target="_blank" rel="noreferrer" 
               className="social-circle-btn" style={{ width: '40px', height: '40px', backgroundColor: '#24292e' }}
               title="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/moamen-essam" target="_blank" rel="noreferrer" 
               className="social-circle-btn" style={{ width: '40px', height: '40px', backgroundColor: '#0077b5' }}
               title="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:moameneisam1@gmail.com" 
               className="social-circle-btn" style={{ width: '40px', height: '40px', backgroundColor: '#ea4335' }}
               title="Email">
              <FiMail size={18} />
            </a>
            <a href="https://wa.me/201090940804" target="_blank" rel="noreferrer" 
               className="social-circle-btn" style={{ width: '40px', height: '40px', backgroundColor: '#25d366' }}
               title="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <div className="col-md-4 text-center text-md-end">
            <button 
              onClick={scrollToTop}
              className="btn btn-outline-primary rounded-circle p-0 d-inline-flex align-items-center justify-content-center transition-all-custom"
              style={{ width: '44px', height: '44px' }}
              aria-label="Scroll to top"
              title="Back to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;