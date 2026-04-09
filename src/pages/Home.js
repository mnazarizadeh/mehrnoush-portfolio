import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PROFILE_IMG = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/portfolios/4cc705fb-37aa-4b2f-b91b-fc2f6764310b/Yss6H38cPIOkRfxi.webp';
const LOCALINK_IMG = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67bdd7ad75aa843ffc315b75/L3OFJY48HMQITdni.webp';
const DALLAS_IMG = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67cd705334fe4c4f44c60a3b/tX8KYfhUNEpxz3Np.webp';

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`home ${visible ? 'home--visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__name">Mehrnoush Safari</h1>
            <h2 className="hero__title">UX/UI designer</h2>
            <p className="hero__tagline">
              Crafting intuitive UX/UI with strategic digital marketing insight.
            </p>
          </div>
          <div className="hero__image-wrapper">
            <img
              src={PROFILE_IMG}
              alt="Mehrnoush Safari"
              className="hero__image"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="projects-section__title">Projects</h2>
        <div className="projects-grid">
          <Link to="/projects" state={{ scrollTo: 'localink' }} className="project-card">
            <div className="project-card__image-container">
              <img
                src={LOCALINK_IMG}
                alt="LocaLink thumbnail"
                className="project-card__image"
              />
            </div>
            <div className="project-card__info">
              <h3 className="project-card__title">LocaLink</h3>
              <p className="project-card__subtitle">Desktop & Mobile App</p>
            </div>
          </Link>

          <Link to="/projects" state={{ scrollTo: 'dallas-flower' }} className="project-card">
            <div className="project-card__image-container">
              <img
                src={DALLAS_IMG}
                alt="Dallas Flower Florist thumbnail"
                className="project-card__image"
              />
            </div>
            <div className="project-card__info">
              <h3 className="project-card__title">Dallas Flower Florist</h3>
              <p className="project-card__subtitle">Redesign UX Project</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
