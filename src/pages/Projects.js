import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const LOCALINK_IMG_1 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/vjpZCTBGZNG9mLSY.webp';
const LOCALINK_IMG_2 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/xVHf039yFNjNlMZp.webp';
const DALLAS_IMG_1 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/n21wYIHe2WzXL5p0.webp';
const DALLAS_IMG_2 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/Wjhmr8oswycJE4jP.webp';

const LOCALINK_THUMB = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67bdd7ad75aa843ffc315b75/L3OFJY48HMQITdni.webp';
const DALLAS_THUMB = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67cd705334fe4c4f44c60a3b/tX8KYfhUNEpxz3Np.webp';

const projects = [
  {
    id: 'localink',
    title: 'LocaLink',
    subtitle: 'Desktop & Mobile App',
    description:
      'Designed a community event app to help users discover, create, and manage local gatherings with ease, focusing on intuitive navigation and clean interfaces across desktop and mobile.',
    thumbnail: LOCALINK_THUMB,
    images: [LOCALINK_IMG_1, LOCALINK_IMG_2],
  },
  {
    id: 'dallas-flower',
    title: 'Dallas Flower Florist',
    subtitle: 'Redesign UX Project',
    description:
      "Redesigned a florist's website to simplify online ordering and showcase products beautifully, enhancing user flow and aligning the brand with a modern, user-centered aesthetic.",
    thumbnail: DALLAS_THUMB,
    images: [DALLAS_IMG_1, DALLAS_IMG_2],
  },
];

function Projects() {
  const [visible, setVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setVisible(true);

    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setExpandedProject(scrollTo);
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.state]);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className={`projects ${visible ? 'projects--visible' : ''}`}>
      <div className="projects__container">
        <p className="projects__intro">Here you can find my projects:</p>

        <div className="projects__list">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="project-detail">
              <div className="project-detail__header">
                <div className="project-detail__info">
                  <h2 className="project-detail__title">{project.title}</h2>
                  <p className="project-detail__description">
                    {project.description}
                  </p>
                  <button
                    className="project-detail__button"
                    onClick={() => toggleProject(project.id)}
                  >
                    {expandedProject === project.id
                      ? 'Close Case Study'
                      : 'View Case Study'}
                  </button>
                </div>
              </div>

              {expandedProject === project.id && (
                <div className="project-detail__gallery">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} case study ${idx + 1}`}
                      className="project-detail__gallery-image"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
