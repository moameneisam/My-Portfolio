import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-5 position-relative">
      {/* Decorative Blob */}
      <div className="glow-bg-blob" style={{ left: '40%', bottom: '10%', background: 'rgba(138, 43, 226, 0.15)' }}></div>

      <div className="container py-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-4 fw-bolder mb-3 text-gradient d-inline-block">Education</h2>
          <p className="lead text-body-secondary mb-5">Academic foundation and field of specialization.</p>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8">
              <div className="glass-card p-5 rounded-4 border-0 position-relative overflow-hidden">
                {/* Soft backdrop glow inside the card */}
                <div className="position-absolute start-50 top-50 translate-middle rounded-circle" 
                     style={{ 
                       width: '60%', 
                       height: '60%', 
                       background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', 
                       zIndex: -1 
                     }}></div>

                <div className="bg-primary bg-opacity-10 d-inline-flex p-4 rounded-circle mb-4 text-primary align-items-center justify-content-center" style={{ width: '96px', height: '96px' }}>
                  <FaGraduationCap size={44} />
                </div>
                
                <h3 className="fw-extrabold mb-2 text-body">Bachelor of Computer Science</h3>
                <h5 className="text-info mb-4 fw-semibold">Lotus University, New Minia</h5>
                
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge bg-secondary bg-opacity-10 text-body border border-secondary border-opacity-25 px-4 py-3 fs-6 rounded-pill fw-semibold">
                    Major: Software Engineering
                  </span>
                  <span className="badge bg-primary px-4 py-3 fs-6 rounded-pill fw-bold shadow-sm">
                    2024 - Expected: 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;