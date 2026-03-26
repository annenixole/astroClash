import React, { useState, useEffect, useRef } from 'react';
import '../styles/LandingPage.css';
import logo from '../assets/astroclashlogo.png';
import trailer from '../assets/Astro Clash Final Trailer.mp4';
import poster from '../assets/AstroClashPoster.png';
import blueastro from '../assets/Blue Astro Display.png';
import greenastro from '../assets/Green Astro Display.png';
import pinkastro from '../assets/Pink Astro Display.png';
import redastro from '../assets/Red Astro Display.png';
import yellowastro from '../assets/Yellow Astro Display.png';
import alien from '../assets/alien.png';

export default function LandingPage() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const gameInfoSectionRef = useRef(null);
  const downloadSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    heroSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    experienceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGameInfo = () => {
    gameInfoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDownload = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTrailerClick = () => {
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsTrailerOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <img src={logo} alt="Astro Clash Logo" className="logo-image" />

          {/* Menu Items */}
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToHero(); }}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About</a>
            </li>
            <li className="nav-item">
              <a href="#gameplay" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToExperience(); }}>Gameplay</a>
            </li>
            <li className="nav-item">
              <a href="#download" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToDownload(); }}>Download</a>
            </li>
          </ul>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={heroSectionRef}>
        <div className="trailer-background">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">ASTRO CLASH: The Battle for Escape</h1>
          <p className="hero-subtitle">
            Started as a mission, turned into a fight for survival. Trapped in space. Surrounded by aliens. Only the fastest, and strategic will escape the station alive.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToDownload}>Play Now</button>
            <button className="btn btn-secondary" onClick={scrollToExperience}>Watch Trailer</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutSectionRef}>
        <div className="about-container">
          {/* Left Side - Poster */}
          <div className="about-poster">
            <img src={poster} alt="Astro Clash Poster" className="poster-image" />
          </div>

          {/* Right Side - About Content */}
          <div className="about-content">
            <h2 className="about-title">
              MEET THE <span className="warriors-text">ASTRONAUTS</span>
            </h2>
            <p className="about-subtitle">
              Join the elite squad of astronauts and compete to be the sole survivor
            </p>

            {/* About Astro Clash */}
            <div className="about-game">
              <h3>About Astro Clash</h3>
              <p>
                Astro Clash is a 2D top-down multiplayer survival game set inside a collapsing space station. After a sudden alien attack, the station is thrown into chaos and enters emergency lockdown. Astronauts must compete against each other to collect four scattered keys, activate the central generator, and escape using a single-person escape pod.              </p>
              <p>
                Players explore the station, gather weapons and tools, and engage in combat while sabotaging rivals. Along the way, they must survive dangerous hazards such as anomaly zones, system failures, and hostile alien entities.              </p>
              <p>
                Only one player can escape. Victory goes to the astronaut who activates the escape sequence and escapes first.
              </p>
            </div>

            {/* Playable Characters */}
            <div className="characters-section">
              <h3>5 Playable Characters</h3>
              <div className="character-grid">
                <div className="character-card">
                  <img src={pinkastro} alt="Pink Astro" className="character-image" />
                  <p className="character-name">PINK ASTRO</p>
                </div>
                <div className="character-card">
                  <img src={blueastro} alt="Blue Astro" className="character-image" />
                  <p className="character-name">BLUE ASTRO</p>
                </div>
                <div className="character-card">
                  <img src={greenastro} alt="Green Astro" className="character-image" />
                  <p className="character-name">GREEN ASTRO</p>
                </div>
                <div className="character-card">
                  <img src={redastro} alt="Red Astro" className="character-image" />
                  <p className="character-name">RED ASTRO</p>
                </div>
                <div className="character-card">
                  <img src={yellowastro} alt="Yellow Astro" className="character-image" />
                  <p className="character-name">YELLOW ASTRO</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section - Gameplay Trailer */}
      <section className="experience-section" ref={experienceSectionRef}>
        <div className="experience-container">
          <h2 className="experience-title">
            EXPERIENCE THE <span className="action-text">ACTION</span>
          </h2>
          <p className="experience-subtitle">
            Watch the official gameplay trailer and see the battles come to life
          </p>

          {/* Video Player */}
          <div className="video-player-wrapper">
            <video
              className="gameplay-video"
              controls
              poster="/path/to/poster"
            >
              <source src={trailer} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="play-button-overlay">
              <div className="play-button">
                <span className="play-icon">▶</span>
              </div>
              <p className="play-text">Watch Gameplay Trailer</p>
            </div>
          </div>

          {/* Specs Row */}
          <div className="specs-row">
            <div className="spec-card">
              <div className="spec-header">👥</div>
              <p className="spec-title">Multiplayer</p>
              <p className="spec-desc">Compete with other players in real-time survival battles.</p>
            </div>
            <div className="spec-card">
              <div className="spec-header red">⚔️</div>
              <p className="spec-title">Combat</p>
              <p className="spec-desc">Engage in fast-paced fights using weapons and strategy.</p>
            </div>
            <div className="spec-card">
              <div className="spec-header purple">🚀</div>
              <p className="spec-title">Escape</p>
              <p className="spec-desc">Find the keys, activate the system, and secure your way out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Information Section */}
      <section className="game-info-section" ref={gameInfoSectionRef}>
        <h2 className="game-info-title">
          DEVELOPERS <span className="info-text">INFORMATION</span>
        </h2>
        <p className="game-info-subtitle">
            In the shadows of the station’s collapse, a dedicated team of developers built the experience that challenges players to fight, survive, and escape.        </p>

        <div className="game-info-container">
          {/* Left Side - Credits & Features */}
          <div className="game-info-content">

            {/* Game Credits */}
            <div className="game-credits">
              <h3>Game Developers</h3>
              <p className="credit-item">
                <span className="credit-label">Group Leader: </span>Anne Nicole Hallegado
              </p>
              <p className="credit-item">
                <span className="credit-label">Assistant Graphic Designer & Animator: </span>  Nhorwie Bianca Mangalile
              </p>
              <p className="credit-item">
                <span className="credit-label">Assistant Developer & Sound Designer: </span>  John Railey Pael
              </p>
            </div>

            {/* Available On */}
            <div className="available-on">
              <h3>Available On</h3>
              <div className="platform-buttons">
                <button className="platform-btn android">Android Devices</button>
                <button className="platform-btn unity">Unity</button>
              </div>
            </div>

          </div>

          {/* Right Side - Alien Image */}
          <div className="game-info-image">
            <img src={alien} alt="Alien Spaceship" className="alien-image" />
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section" ref={downloadSectionRef}>
          <h2 className="download-title">Ready to Join the Battle?</h2>
          <p className="download-subtitle">Download Astro Clash now and start your space clash with friends!</p>
          <div className="download-buttons">
            <button className="download-btn android-download">Download for Android</button>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      {isTrailerOpen && (
        <div className="trailer-modal" onClick={handleCloseTrailer}>
          <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseTrailer}>&times;</button>
            <div className="trailer-container">
              <video
                width="100%"
                height="100%"
                controls
                autoPlay>
                <source src={trailer} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
