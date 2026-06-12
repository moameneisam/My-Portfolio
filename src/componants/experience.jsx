import { motion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const Experience = () => {
  // variants for timeline fade-in
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="py-5 position-relative">
      {/* Decorative Blob */}
      <div className="glow-bg-blob" style={{ right: '10%', top: '20%' }}></div>

      <div className="container py-5">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-4 fw-bolder mb-3 text-gradient d-inline-block">Training & Internships</h2>
          <p className="lead text-body-secondary">My professional development and hands-on learning history.</p>
        </motion.div>

        {/* Timeline container */}
        <div className="timeline mt-5">
          
          {/* Timeline Item 1 - DEPI (Right side or Left side) */}
          <div className="timeline-container left">
            <motion.div 
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-4 p-4"
            >
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
                <h4 className="fw-bold d-flex align-items-center gap-3 mb-0 fs-5">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <FaLaptopCode size={20} />
                  </div>
                  Front-end Trainee
                </h4>
                <span className="badge bg-primary px-3 py-2 fs-6 rounded-pill text-nowrap">Oct 2024 - Present</span>
              </div>
              
              <h5 className="text-info mb-3 fw-semibold">Digital Egypt Pioneers Initiative (DEPI)</h5>
              
              <ul className="text-body-secondary fs-6 mb-0 ps-3" style={{ lineHeight: '1.8' }}>
                <li className="mb-2">Intensive training focused on modern Front-End technologies including React.js</li>
                <li className="mb-2">Gaining foundational knowledge in Back-End development to understand full-stack integration with Node.js.</li>
                <li>Developing responsive web applications and applying best coding practices.</li>
              </ul>
            </motion.div>
          </div>

          {/* Timeline Item 2 - ITI */}
          <div className="timeline-container right">
            <motion.div 
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-4 p-4"
            >
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
                <h4 className="fw-bold d-flex align-items-center gap-3 mb-0 fs-5">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <FaChalkboardTeacher size={20} />
                  </div>
                  Web Dev Trainee
                </h4>
                <span className="badge bg-primary px-3 py-2 fs-6 rounded-pill text-nowrap">Jul 2024</span>
              </div>
              
              <h5 className="text-info mb-3 fw-semibold">Information Technology Institute (ITI)</h5>
              
              <ul className="text-body-secondary fs-6 mb-0 ps-3" style={{ lineHeight: '1.8' }}>
                <li className="mb-2">Completed a 60-hour intensive summer training program in Web Development.</li>
                <li>Built solid proficiency in HTML, CSS, Bootstrap, and JavaScript through practical assignments.</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
