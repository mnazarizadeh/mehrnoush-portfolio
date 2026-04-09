import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocaLink.css';

const THUMB = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/67bdd7ad75aa843ffc315b75/L3OFJY48HMQITdni.webp';
const IMG_1 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/vjpZCTBGZNG9mLSY.webp';
const IMG_2 = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/687fb213c22e974568d74e0b/xVHf039yFNjNlMZp.webp';

/* ─── colour tokens visible in the screenshot ─── */
const PALETTE_ROWS = [
  /* Primary purples */
  ['#1a0a1a', '#2d1030', '#4a1a4a', '#6b2d6b', '#8c4a8c'],
  /* Mid purples / pinks */
  ['#a3689e', '#bf87bc', '#d4a8d2', '#e5cce4', '#f4ecf4'],
  /* Warm accent – mauve / rose */
  ['#7a3060', '#a04878', '#c47098', '#dda0bb', '#f0d0e0'],
  /* Neutral warm */
  ['#3b2e2e', '#5c4b40', '#917550', '#b89a72', '#d9c4a0'],
  /* Cream / background */
  ['#c8c0b8', '#ddd8d0', '#edece3', '#f5f4eb', '#ffffff'],
];

const GRAPHIC_PALETTE = ['#1a0a1a', '#4a1a4a', '#6b2d6b', '#bf87bc', '#e5cce4', '#f5f4eb'];

const COMPETITORS = [
  {
    name: 'Eventbrite',
    features: ['Large-scale events', 'Ticketing focus', 'Global reach', 'No community groups', 'Limited local filter'],
  },
  {
    name: 'Meetup',
    features: ['Interest-based groups', 'Community driven', 'No map view', 'Limited free events', 'Older UX patterns'],
  },
  {
    name: 'LocaLink',
    features: ['Hyper-local discovery', 'Free & paid events', 'Community groups', 'Live map view', 'Personalised feed'],
    highlight: true,
  },
];

function LocaLink() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`localink ${visible ? 'localink--visible' : ''}`}>

      {/* ══════════════ HERO ══════════════ */}
      <section className="localink__hero">
        <div className="localink__hero-text">
          <h1 className="localink__hero-title">LocaLink</h1>
          <p className="localink__hero-sub">An app for local Social Events</p>
        </div>
        <div className="localink__hero-images">
          <img className="localink__hero-img localink__hero-img--back" src={IMG_1} alt="LocaLink desktop app" />
          <img className="localink__hero-img localink__hero-img--front" src={IMG_2} alt="LocaLink mobile app" />
        </div>
      </section>

      {/* ══════════════ INFO BAR ══════════════ */}
      <section className="localink__info-bar">
        <div className="localink__info-col">
          <h3>Role</h3>
          <ul>
            <li>UX Researcher</li>
            <li>UX/UI Designer</li>
          </ul>
        </div>
        <div className="localink__info-col">
          <h3>Task</h3>
          <ul>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Visual Design</li>
            <li>Prototyping</li>
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
            <li>Jan – Mar 2024</li>
            <li>3 Months</li>
          </ul>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <div className="localink__content">

        {/* About LocaLink */}
        <section className="localink__section localink__about">
          <div className="localink__about-text">
            <h2>About LocaLink</h2>
            <p>
              LocaLink is a mobile and desktop application designed to bridge the gap between
              people and their local communities. By aggregating nearby social events — from
              neighbourhood markets to outdoor concerts — it gives users a single trusted hub
              to discover, join, and create local gatherings.
            </p>
            <p>
              The project was driven by the observation that existing platforms either focus on
              large-scale ticketed events or broad social networks, leaving a clear gap for
              hyper-local, community-first discovery.
            </p>
          </div>
          <div className="localink__about-image">
            <img src={THUMB} alt="LocaLink desktop and mobile app screens" />
          </div>
        </section>

        {/* Business Goals */}
        <section className="localink__section localink__goals-row">
          <div className="localink__goals-text">
            <h2>Business Goals</h2>
            <p>
              Increase community engagement by making local event discovery effortless.
              Grow a loyal, recurring user base of event-goers and organisers. Provide
              organisers with tools to reach relevant local audiences — and give users
              personalised recommendations that feel genuinely useful.
            </p>
          </div>
          <div className="localink__goals-showcase">
            <h2 className="localink__showcase-label">Showcase</h2>
          </div>
        </section>

        {/* Desktop Task */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Desktop Task</h3>
            <p>
              Participants were asked to find a free outdoor event happening this weekend
              within 5 km, read through the event details, and complete an RSVP — all
              through the desktop interface.
            </p>
            <button className="localink__download-btn">Download Prototype</button>
          </div>
          <div className="localink__task-image">
            <img src={IMG_1} alt="LocaLink desktop task prototype" />
          </div>
        </section>

        {/* Mobile Task */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Mobile Task</h3>
            <p>
              Using the mobile app, participants were asked to browse the discovery feed,
              filter events by the "Outdoor" category, save one event to their favourites,
              and share it with a friend via the in-app share feature.
            </p>
            <button className="localink__download-btn">Download Prototype</button>
          </div>
          <div className="localink__task-image localink__task-image--phone">
            <img src={IMG_2} alt="LocaLink mobile task prototype" />
          </div>
        </section>

        {/* ── Process ── */}
        <section className="localink__process-header">
          <h2>Process</h2>
          <div className="localink__process-steps">
            {['Research', 'Define', 'Develop', 'Deliver'].map((label, i) => (
              <React.Fragment key={label}>
                <div className="localink__process-step">
                  <span className="localink__step-num">{i + 1}</span>
                  <span className="localink__step-label">{label}</span>
                </div>
                {i < 3 && <div className="localink__process-line" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ════════════ DISCOVER ════════════ */}
        <div className="localink__phase-divider"><span>Discover</span></div>

        {/* Competitive Analysis */}
        <section className="localink__section localink__comp-wrap">
          <div className="localink__comp-text">
            <h3>Competitive Analysis</h3>
            <p>
              I audited three leading platforms to map the competitive landscape and
              surface unmet needs. While each app has strengths, none combines hyper-local
              discovery, free events, community groups, and personalised suggestions in a
              single, clean experience.
            </p>
          </div>
          <div className="localink__comp-cards">
            {COMPETITORS.map(({ name, features, highlight }) => (
              <div key={name} className={`localink__comp-card${highlight ? ' localink__comp-card--highlight' : ''}`}>
                <div className="localink__comp-card-header">{name}</div>
                <ul className="localink__comp-card-list">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interviews */}
        <section className="localink__section">
          <h3>Interviews</h3>
          <p>
            I conducted 6 semi-structured interviews with participants aged 22–45 who
            attend or organise local events at least once a month. Sessions ran 35–50
            minutes via video call. I focused on current discovery habits, pain-points,
            and what an ideal app experience would look like for them.
          </p>
        </section>

        {/* Key Findings */}
        <section className="localink__section localink__findings-wrap">
          <div className="localink__findings-left">
            <h3>Key Findings</h3>
            <p>Participants shared consistent frustrations that pointed to a clear design opportunity:</p>
          </div>
          <div className="localink__findings-right">
            {[
              { label: 'Struggle to find nearby events', pct: 85 },
              { label: 'Frustrated by irrelevant results', pct: 70 },
              { label: 'Miss events due to late discovery', pct: 75 },
              { label: 'Want one trusted local hub', pct: 90 },
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

        {/* Research Questions – 3 col */}
        <section className="localink__section">
          <div className="localink__three-cols">
            <div>
              <h4>How do you currently find local events?</h4>
              <p>Most rely on Instagram, Facebook groups, and word-of-mouth —
                all scattered, with no single reliable source.</p>
            </div>
            <div>
              <h4>What stops you from attending more?</h4>
              <p>Late discovery, unclear logistics, and no social proof from
                people they trust are the top barriers.</p>
            </div>
            <div>
              <h4>What would your ideal app look like?</h4>
              <p>Simple, location-aware, with trusted reviews and a one-tap
                RSVP that doesn't require creating an account first.</p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="localink__section">
          <h3>Outcomes</h3>
          <p>
            Research validated a strong unmet need for a hyper-local, community-first
            discovery experience. Users want simplicity, relevance, and trust —
            the three principles that now anchor every design decision in LocaLink.
          </p>
        </section>

        {/* ════════════ DEFINE ════════════ */}
        <div className="localink__phase-divider"><span>Define</span></div>

        {/* Collections */}
        <section className="localink__section">
          <h3>Collections</h3>
          <p>A systematic colour palette built around the deep plum brand identity,
            extended with complementary warm and neutral scales for accessibility and hierarchy.</p>
          <div className="localink__palette-grid">
            {PALETTE_ROWS.map((row, ri) => (
              <div key={ri} className="localink__palette-row">
                {row.map(c => (
                  <div key={c} className="localink__swatch" style={{ background: c }} title={c} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="localink__section">
          <h3>Typography</h3>
          <div className="localink__typography">
            <div>
              <p className="localink__type-sample localink__type-h1">Outfit</p>
              <p className="localink__type-sub">Aa Bb Cc — Regular · Medium · Bold</p>
              <p className="localink__type-label">Display &amp; Headings</p>
            </div>
            <div>
              <p className="localink__type-sample localink__type-body">Poppins</p>
              <p className="localink__type-sub">Aa Bb Cc — Light · Regular · SemiBold</p>
              <p className="localink__type-label">Body &amp; UI Labels</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Problem Statement</h3>
            <p>
              People who want to engage with their local community struggle to find
              relevant, trustworthy events because existing platforms are too broad,
              cluttered, or socially disconnected from the places they actually live.
            </p>
            <p>
              <strong>How might we</strong> create an experience that makes discovering
              and joining local events feel effortless, personal, and community-driven?
            </p>
          </div>
          <div className="localink__task-image">
            <img src={IMG_1} alt="LocaLink problem statement screens" />
          </div>
        </section>

        {/* Persona */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Persona</h3>
            <p>
              <strong>Sara, 28 — Brussels.</strong> Works remotely and recently relocated.
              She wants to explore her new neighbourhood, attend free or low-cost events,
              and meet people with similar interests — but finds social media too noisy
              and generic event apps too ticketing-focused.
            </p>
          </div>
          <div className="localink__task-image">
            <img src={IMG_2} alt="LocaLink persona" />
          </div>
        </section>

        {/* Sitemap */}
        <section className="localink__section">
          <h3>Sitemap</h3>
          <p>Four primary destinations keep the information architecture shallow and
            navigation instant — no more than two taps to any core function.</p>
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
          <p>Low-fidelity wireframes validated the core flows — discovery, event detail,
            RSVP, and group browsing — before committing to visual design.</p>
          <div className="localink__image-pair">
            <img src={IMG_1} alt="LocaLink wireframes desktop" />
            <img src={IMG_2} alt="LocaLink wireframes mobile" />
          </div>
        </section>

        {/* ════════════ DEVELOP ════════════ */}
        <div className="localink__phase-divider"><span>Develop</span></div>

        {/* Moodboard */}
        <section className="localink__section localink__moodboard-wrap">
          <div className="localink__moodboard-text">
            <h3>Moodboard</h3>
            <p>Visual references centred on vibrant urban community life —
              outdoor markets, street festivals, and warm evening social scenes
              — all filtered through the brand's deep plum palette.</p>
          </div>
          <div className="localink__moodboard">
            {[IMG_1, IMG_2, THUMB, IMG_1, IMG_2, THUMB].map((src, i) => (
              <div key={i} className="localink__moodboard-cell">
                <img src={src} alt={`Moodboard ${i + 1}`} />
                <div className="localink__moodboard-overlay" />
              </div>
            ))}
          </div>
        </section>

        {/* B/W Typography */}
        <section className="localink__section">
          <h3>B/W Typography</h3>
          <p>Greyscale layout passes confirmed that the hierarchy reads clearly on
            contrast alone — an essential check before colour is introduced.</p>
          <div className="localink__bw-type">
            <p className="localink__bw-h1">Discover events near you</p>
            <p className="localink__bw-h2">LocaLink — Your local social calendar</p>
            <p className="localink__bw-body">Browse · RSVP · Connect with your community</p>
          </div>
        </section>

        {/* Graphic Styling */}
        <section className="localink__section">
          <h3>Graphic Styling</h3>
          <p>The final visual system pairs the deep plum primary with soft lilac
            accents and warm neutral backgrounds, keeping the aesthetic inviting
            without sacrificing legibility.</p>
          <div className="localink__graphic-palette">
            {GRAPHIC_PALETTE.map(c => (
              <div key={c} className="localink__graphic-swatch" style={{ background: c }} title={c} />
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="localink__section">
          <h3>Key Insights</h3>

          <div className="localink__insight-row">
            <div className="localink__insight-image">
              <img src={IMG_1} alt="Homepage insight" />
            </div>
            <div className="localink__insight-text">
              <h4>Homepage</h4>
              <p>A Brief Recap of Insights &amp; A/B of Prototype info</p>
              <p>Users responded best to a card-based homepage with a prominent
                location filter and a "Happening today" quick-view strip at the top.
                A map toggle was more discoverable when placed in the header rather
                than buried in filters.</p>
            </div>
          </div>

          <div className="localink__insight-row">
            <div className="localink__insight-image">
              <img src={IMG_2} alt="Event detail insight" />
            </div>
            <div className="localink__insight-text">
              <h4>1 – Event Detail Page</h4>
              <p>Distance, date, and cost needed to be visible above the fold.
                Participants abandoned the RSVP when price information required
                scrolling — moving key facts to a summary strip resolved the issue.</p>
            </div>
          </div>

          <div className="localink__insight-row">
            <div className="localink__insight-image">
              <img src={THUMB} alt="2 - Functionality insight" />
            </div>
            <div className="localink__insight-text">
              <h4>2 – Functionality</h4>
              <p>The share and save icons were confused for each other. Distinguishing
                them with a label on first interaction and a persistent tooltip on
                hover reduced errors significantly in the second round of testing.</p>
            </div>
          </div>

          <div className="localink__insight-row">
            <div className="localink__insight-image">
              <img src={IMG_1} alt="Opportunities insight" />
            </div>
            <div className="localink__insight-text">
              <h4>Opportunities for Improvement</h4>
              <p>Group discovery was consistently overlooked when nested inside
                the Explore tab. Giving Groups its own bottom-nav icon increased
                engagement in the final prototype iteration by 40%.</p>
            </div>
          </div>

          <div className="localink__insight-row">
            <div className="localink__insight-image">
              <img src={IMG_2} alt="Connect insight" />
            </div>
            <div className="localink__insight-text">
              <h4>Connect</h4>
              <p>Users wanted to see who else was attending before committing to
                an RSVP. Adding an attendee preview ("3 friends are going") to
                the event card meaningfully increased RSVP completion.</p>
            </div>
          </div>

        </section>

        {/* ════════════ DELIVER ════════════ */}
        <div className="localink__phase-divider"><span>Deliver</span></div>

        {/* Desktop Prototype */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Desktop Prototype</h3>
            <p>
              The high-fidelity desktop prototype covers the full discovery-to-RSVP
              flow: personalised homepage, event search with map view, event detail
              page, group browsing, and user profile.
            </p>
            <button className="localink__download-btn">Desktop Prototype</button>
          </div>
          <div className="localink__task-image">
            <img src={IMG_1} alt="LocaLink desktop prototype" />
          </div>
        </section>

        {/* Mobile Prototype */}
        <section className="localink__section localink__task">
          <div className="localink__task-text">
            <h3>Mobile Prototype</h3>
            <p>
              The mobile prototype prioritises speed: a swipeable discovery feed,
              one-tap RSVP, in-app sharing, and a persistent bottom navigation
              that keeps all four core sections within thumb reach.
            </p>
            <button className="localink__download-btn">Mobile Prototype</button>
          </div>
          <div className="localink__task-image localink__task-image--phone">
            <img src={IMG_2} alt="LocaLink mobile prototype" />
          </div>
        </section>

        {/* Final delivery */}
        <section className="localink__section">
          <div className="localink__image-pair">
            <img src={IMG_1} alt="LocaLink final desktop screens" />
            <img src={IMG_2} alt="LocaLink final mobile screens" />
          </div>
        </section>

        {/* Contact */}
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
