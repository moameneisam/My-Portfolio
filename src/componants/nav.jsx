import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Nav = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3 navbar-custom">
      <div className="container">
        
        {/* Logo */}
        <motion.a 
          className="navbar-brand fw-bolder fs-3 text-gradient" 
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MOAMEN<span className="text-body">.Dev</span>
        </motion.a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 fw-bold align-items-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">What I Do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#projects">Work</a>
            </li>
            
            {/* Theme Toggle Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="btn btn-link nav-link p-0 d-flex align-items-center justify-content-center rounded-circle border"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderColor: 'var(--border-color)',
                  background: 'var(--glass-bg)'
                }}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <FiSun size={20} className="text-warning" /> : <FiMoon size={20} className="text-primary" />}
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;