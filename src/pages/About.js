import React, { useEffect, useState } from 'react';
import './About.css';

const ABOUT_IMG = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67a39003f69c4162fdbdde1f/Oh8JyRr2RERYucHC.webp';
const RESUME_URL = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/Mehrnoush_Safari_Pqj.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mehrnoush-safari/';

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`about ${visible ? 'about--visible' : ''}`}>
      <div className="about__container">
        <div className="about__header">
          <h1 className="about__name">Mehrnoush Safari</h1>
        </div>

        <div className="about__content">
          <div className="about__text-section">
            <h2 className="about__section-title">About me</h2>
            <div className="about__body">
              <p>
                Hey there, I'm Mehrnoush—a UX/UI Designer based in Brussels, Belgium,
                with a strong background in user research, interaction design, and digital strategy.
              </p>
              <p>
                My journey into UX/UI began with a deep passion for understanding user behavior,
                shaped by nine years in digital marketing. Through running awareness campaigns,
                content creation, and website management, I gained firsthand experience in analyzing
                user engagement and optimizing digital experiences.
              </p>
              <p>
                As a Senior Digital Marketing Specialist, running awareness campaigns allowed me to
                analyze user behavior and gain deeper insights into their needs, leveraging analytical
                tools to optimize strategies. Working with various CMS platforms for website content,
                I prioritized user-centric design and industry standards to enhance engagement. This
                experience gave me a strong foundation in UX/UI, enabling me to create designs that
                truly align with user needs.
              </p>
              <p>
                Beyond design, I love exploring different cuisines and experimenting with cooking—it's
                my way of blending creativity and precision, much like my approach to UX!
              </p>
              <p className="about__cta-text">
                Let's create user experiences that truly make an impact.
              </p>
            </div>
          </div>

          <div className="about__image-section">
            <img
              src={ABOUT_IMG}
              alt="Mehrnoush Safari"
              className="about__image"
            />
          </div>
        </div>

        <div className="about__links">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="about__button"
          >
            My Resume
          </a>

          <div className="about__connect">
            <h3 className="about__connect-title">Let's connect!</h3>
            <p className="about__connect-text">
              Want to stay up-to-date with my work? Follow me on my LinkedIn account:
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="about__button about__button--linkedin"
            >
              My LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
