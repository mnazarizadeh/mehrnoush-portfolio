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

        {/* Two-column: photo left, text right */}
        <div className="about__content">
          <div className="about__image-section">
            <img
              src={ABOUT_IMG}
              alt="Mehrnoush Safari"
              className="about__image"
            />
            <p className="about__name">Mehrnoush Safari</p>
          </div>

          <div className="about__text-section">
            <h1 className="about__section-title">About me</h1>
            <div className="about__body">
              <p>
                Hey there, I'm Mehrnoush—a UX/UI Designer based in Brussels, Belgium,
                with a strong background in <strong>user research, interaction design,</strong> and{' '}
                <strong>digital strategy</strong>.
              </p>
              <p>
                My journey into UX/UI began with a deep passion for understanding user behavior,
                shaped by <strong>nine years in digital marketing</strong>. Through running awareness campaigns,
                content creation, and website management, I gained firsthand experience in analyzing{' '}
                <strong>user engagement</strong> and optimizing <strong>digital experiences</strong>.
              </p>
              <p>
                As a Senior Digital Marketing Specialist, running awareness campaigns allowed me to{' '}
                <strong>analyze user behavior</strong> and gain deeper insights into their needs, leveraging
                analytical tools to optimize strategies. Working with various CMS platforms for website content,
                I prioritized user-centric design and industry standards to enhance engagement. This experience
                gave me a strong foundation in UX/UI, enabling me to create designs that truly align with user needs.
              </p>
              <p>
                Beyond design, I love exploring different cuisines and experimenting with cooking—it's
                my way of blending creativity and precision, much like my approach to UX!
              </p>
              <p>
                Let's create user experiences that truly make an impact.
              </p>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="about__button"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Centered connect section */}
        <div className="about__connect">
          <h2 className="about__connect-title">Let's connect!</h2>
          <p className="about__connect-text">
            Want to stay up-to-date with my work? Follow me on my LinkedIn account:
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="about__button"
          >
            My LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;
