import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocaLink.css';

const THUMB = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67bdd7ad75aa843ffc315b75/L3OFJY48HMQITdni.webp';
const IMG_1 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/vjpZCTBGZNG9mLSY.webp';
const IMG_2 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/xVHf039yFNjNlMZp.webp';

function LocaLink() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`localink ${visible ? 'localink--visible' : ''}`}>

      {/* ── Hero ── */}
      <section className="localink__hero">
        <div className="localink__hero-text">
          <h1 className="localink__hero-title">LocaLink</h1>
          <p className="localink__hero-sub">An app for local social events and community gatherings</p>
        </div>
        <div className="localink__hero-image">
          <img src={THUMB} alt="LocaLink app mockup" />
        </div>
      </section>

      {/* ── Project Info Bar ── */}
      <section className="localink__info-bar">
        <div className="localink__info-col">
          <h3>Role</h3>
          <ul>
            <li>UX/UI Designer</li>
            <li>User Researcher</li>
          </ul>
        </div>
        <div className="localink__info-col">
          <h3>Task</h3>
          <ul>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Usability Testing</li>
          </ul>
        </div>
        <div className="localink__info-col">
          <h3>Tools</h3>
          <ul>
            <li>Figma</li>
            <li>FigJam</li>
            <li>Maze</li>
          </ul>
        </div>
        <div className="localink__info-col">
          <h3>Timeline</h3>
          <ul>
            <li>3 Months</li>
            <li>2024</li>
          </ul>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="localink__content">

        {/* About */}
        <section className="localink__section localink__about">
          <div className="localink__about-text">
            <h2>About LocaLink</h2>
            <p>
              LocaLink is a community-driven platform designed to help people discover, create,
              and manage local events and social gatherings. The goal is to bridge the gap between
              online interaction and real-world connection by making it easy for users to find
              activities happening around them.
            </p>
          </div>
          <div className="localink__about-image">
            <img src={IMG_1} alt="LocaLink desktop and mobile screens" />
          </div>
        </section>

        {/* Business Goals */}
        <section className="localink__section">
          <h2>Business Goals</h2>
          <p>
            The primary goal is to increase community engagement by providing a seamless experience
            for discovering and attending local events. Secondary goals include growing a loyal user
            base, enabling event organizers to reach wider local audiences, and fostering repeat usage
            through personalized recommendations.
          </p>
        </section>

        {/* Showcase */}
        <section className="localink__section localink__showcase-header">
          <h2>Showcase</h2>
        </section>

        {/* Desktop Task */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Desktop Task</h3>
            <p>
              Users were asked to search for a local event in their city, review the event details,
              and complete a booking. The desktop interface focuses on comprehensive browsing with
              map integration and detailed event cards.
            </p>
          </div>
          <div className="localink__task-image">
            <img src={IMG_1} alt="LocaLink desktop task flow" />
          </div>
        </section>

        {/* Mobile Task */}
        <section className="localink__section localink__task localink__task--reverse">
          <div className="localink__task-text">
            <h3>Mobile Task</h3>
            <p>
              On mobile, users navigated the discovery feed, filtered events by category, and saved
              an event to their favourites. The mobile experience prioritises speed and quick access
              to nearby events using location-based suggestions.
            </p>
          </div>
          <div className="localink__task-image">
            <img src={IMG_2} alt="LocaLink mobile task flow" />
          </div>
        </section>

        {/* ── Process ── */}
        <section className="localink__process-header">
          <h2>Process</h2>
          <div className="localink__process-steps">
            <div className="localink__process-step">
              <span className="localink__step-num">1</span>
              <span className="localink__step-label">Discover</span>
            </div>
            <div className="localink__process-line" />
            <div className="localink__process-step">
              <span className="localink__step-num">2</span>
              <span className="localink__step-label">Define</span>
            </div>
            <div className="localink__process-line" />
            <div className="localink__process-step">
              <span className="localink__step-num">3</span>
              <span className="localink__step-label">Develop</span>
            </div>
            <div className="localink__process-line" />
            <div className="localink__process-step">
              <span className="localink__step-num">4</span>
              <span className="localink__step-label">Deliver</span>
            </div>
          </div>
        </section>

        {/* ════════════ DISCOVER ════════════ */}
        <div className="localink__phase-divider">
          <span>Discover</span>
        </div>

        {/* Competitive Analysis */}
        <section className="localink__section">
          <h3>Competitive Analysis</h3>
          <p>
            I analysed three major competitors — Eventbrite, Meetup, and Facebook Events — to
            identify gaps in community-focused local event discovery. Key findings revealed that
            most platforms prioritise large-scale events over intimate neighbourhood gatherings,
            leaving a clear opportunity for LocaLink.
          </p>
          <div className="localink__comparison-table">
            <div className="localink__comparison-header">
              <span>Feature</span>
              <span>Eventbrite</span>
              <span>Meetup</span>
              <span>LocaLink</span>
            </div>
            {[
              ['Local discovery', '✓', '✓', '✓'],
              ['Free events', '✓', '✗', '✓'],
              ['Community groups', '✗', '✓', '✓'],
              ['Map view', '✓', '✗', '✓'],
              ['Personal recommendations', '✗', '✗', '✓'],
            ].map(([feature, a, b, c]) => (
              <div className="localink__comparison-row" key={feature}>
                <span>{feature}</span>
                <span>{a}</span>
                <span>{b}</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interviews */}
        <section className="localink__section">
          <h3>Interviews</h3>
          <p>
            I conducted 6 semi-structured interviews with participants aged 22–45 who regularly
            attend or organise local events. Sessions lasted 30–45 minutes each. The goal was to
            understand how people currently discover events, what frustrates them, and what would
            motivate them to use a dedicated local events app.
          </p>
        </section>

        {/* Key Findings */}
        <section className="localink__section">
          <h3>Key Findings</h3>
          <p>Users expressed clear frustrations and desires during the research phase:</p>
          <div className="localink__findings">
            {[
              { label: 'Difficulty finding nearby events', pct: 83 },
              { label: 'Overwhelmed by irrelevant recommendations', pct: 67 },
              { label: 'Lack of trusted community reviews', pct: 72 },
              { label: 'Want personalised suggestions', pct: 90 },
            ].map(({ label, pct }) => (
              <div className="localink__finding-row" key={label}>
                <span className="localink__finding-label">{label}</span>
                <div className="localink__finding-bar-track">
                  <div className="localink__finding-bar" style={{ width: `${pct}%` }} />
                </div>
                <span className="localink__finding-pct">{pct}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Questions */}
        <section className="localink__section">
          <div className="localink__three-cols">
            <div>
              <h4>How do you currently find local events?</h4>
              <p>Most participants rely on word of mouth, Instagram, and Facebook groups — all
                fragmented sources with no single reliable hub.</p>
            </div>
            <div>
              <h4>What stops you from attending more events?</h4>
              <p>Participants cited late discovery, unclear logistics, and lack of social proof
                as the primary barriers to attendance.</p>
            </div>
            <div>
              <h4>What would make an ideal events app?</h4>
              <p>Users want a clean interface, location-aware suggestions, trusted reviews, and
                easy RSVP — ideally in one tap.</p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="localink__section">
          <h3>Outcomes</h3>
          <p>
            Research confirmed a strong unmet need for a hyper-local, community-first event
            discovery platform. Users want simple navigation, relevant suggestions, and a sense
            of community trust — all core pillars of the LocaLink design direction.
          </p>
        </section>

        {/* ════════════ DEFINE ════════════ */}
        <div className="localink__phase-divider">
          <span>Define</span>
        </div>

        {/* Collections / Colour Palette */}
        <section className="localink__section">
          <h3>Collections</h3>
          <p>The colour palette draws from warm purples and neutral creams to convey community,
            warmth, and inclusivity.</p>
          <div className="localink__palette">
            {['#3d1a3d', '#6b2d6b', '#9c4f9c', '#c68fc6', '#eddeed',
              '#f5f4eb', '#917550', '#5c5651', '#edece3', '#ffffff'].map(c => (
              <div key={c} className="localink__swatch" style={{ background: c }}
                title={c} />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="localink__section">
          <h3>Typography</h3>
          <div className="localink__typography">
            <div>
              <p className="localink__type-sample localink__type-h1">Outfit</p>
              <p className="localink__type-label">Heading — Outfit Regular/Medium</p>
            </div>
            <div>
              <p className="localink__type-sample localink__type-body">Poppins</p>
              <p className="localink__type-label">Body — Poppins Regular</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Problem Statement</h3>
            <p>
              People who want to engage with their local community struggle to find relevant,
              trustworthy, and nearby events because existing platforms are either too broad,
              cluttered, or socially disconnected.
            </p>
            <p>
              <strong>How might we</strong> design an experience that makes discovering and
              joining local events feel effortless, personal, and community-driven?
            </p>
          </div>
          <div className="localink__task-image">
            <img src={IMG_1} alt="LocaLink problem statement screens" />
          </div>
        </section>

        {/* Sitemap */}
        <section className="localink__section">
          <h3>Sitemap</h3>
          <p>The information architecture is built around four core areas: Explore, My Events,
            Groups, and Profile — keeping navigation shallow and intuitive.</p>
          <div className="localink__sitemap">
            <div className="localink__sitemap-root">LocaLink</div>
            <div className="localink__sitemap-branches">
              {['Explore', 'My Events', 'Groups', 'Profile'].map(item => (
                <div key={item} className="localink__sitemap-node">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Wireframe */}
        <section className="localink__section">
          <h3>Wireframe</h3>
          <p>Low-fidelity wireframes were created to validate the core user flows before
            moving into visual design.</p>
          <div className="localink__image-pair">
            <img src={IMG_1} alt="LocaLink wireframe screens" />
            <img src={IMG_2} alt="LocaLink wireframe mobile" />
          </div>
        </section>

        {/* ════════════ DEVELOP ════════════ */}
        <div className="localink__phase-divider">
          <span>Develop</span>
        </div>

        {/* Moodboard */}
        <section className="localink__section">
          <h3>Moodboard</h3>
          <p>Visual inspiration centred around warm community spaces, vibrant street life, and
            clean modern app interfaces that feel approachable.</p>
          <div className="localink__moodboard">
            <img src={IMG_1} alt="Moodboard 1" />
            <img src={IMG_2} alt="Moodboard 2" />
            <img src={THUMB} alt="Moodboard 3" />
          </div>
        </section>

        {/* B/W Typography */}
        <section className="localink__section">
          <h3>B/W Typography</h3>
          <p>Black-and-white explorations helped establish hierarchy and spacing before
            introducing colour, ensuring the layout works on contrast alone.</p>
        </section>

        {/* Graphic Styling */}
        <section className="localink__section">
          <h3>Graphic Styling</h3>
          <p>
            Final styling decisions combined the purple brand palette with generous white space,
            rounded corners, and subtle shadows to create a friendly, modern aesthetic that
            encourages exploration.
          </p>
          <div className="localink__palette">
            {['#3d1a3d', '#6b2d6b', '#9c4f9c', '#c68fc6', '#eddeed', '#ffffff'].map(c => (
              <div key={c} className="localink__swatch localink__swatch--lg"
                style={{ background: c }} title={c} />
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="localink__section">
          <h3>Key Insights</h3>
          <p>Usability testing on mid-fidelity prototypes with 5 participants surfaced three
            critical improvements before moving to high-fidelity:</p>
          <ul className="localink__insights-list">
            <li>The event card needed a clearer distance indicator — users couldn't quickly gauge proximity.</li>
            <li>The RSVP flow had one step too many; consolidating confirmation reduced drop-off.</li>
            <li>Group discovery required a dedicated entry point rather than being nested inside Explore.</li>
          </ul>
          <div className="localink__image-pair">
            <img src={IMG_1} alt="Key insight screens" />
            <img src={IMG_2} alt="Key insight iteration" />
          </div>
        </section>

        {/* ════════════ DELIVER ════════════ */}
        <div className="localink__phase-divider">
          <span>Deliver</span>
        </div>

        {/* Desktop Prototype */}
        <section className="localink__section">
          <h3>Desktop Prototype</h3>
          <p>The high-fidelity desktop prototype covers the full discovery-to-booking flow,
            including map view, event detail page, and group pages.</p>
          <img src={IMG_1} alt="LocaLink desktop prototype" className="localink__full-img" />
        </section>

        {/* Mobile Prototype */}
        <section className="localink__section">
          <h3>Mobile Prototype</h3>
          <p>The mobile prototype prioritises speed and location awareness, with a swipeable
            discovery feed and one-tap RSVP.</p>
          <img src={IMG_2} alt="LocaLink mobile prototype" className="localink__full-img" />
        </section>

        {/* Final Screens */}
        <section className="localink__section">
          <h3>Final Screens</h3>
          <div className="localink__image-pair">
            <img src={IMG_1} alt="LocaLink final desktop screens" />
            <img src={IMG_2} alt="LocaLink final mobile screens" />
          </div>
        </section>

        {/* Get in touch */}
        <section className="localink__section localink__contact">
          <p>Get in touch at</p>
          <a href="mailto:contact@mehrnoushsafari.com">contact@mehrnoushsafari.com</a>
        </section>

      </div>

      <button className="localink__back-btn" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </button>

    </div>
  );
}

export default LocaLink;
