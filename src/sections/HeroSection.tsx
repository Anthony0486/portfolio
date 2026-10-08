function HeroSection() {
  return (
    <section className="hero section-wrap" id="accueil">
      <div className="hero-copy">
        <p className="hand hero-greeting">
          Salut ! <span aria-hidden="true">↙</span>
        </p>
        <h1>
          Je suis Anthony,
          <br />
          <span className="highlight">développeur web</span>
        </h1>
        <p className="hero-intro">
          Passionné par le web, les jeux vidéo et les nouvelles technologies, je crée des projets
          simples et utiles, avec une touche de créativité.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projets">
            Voir mes projets <span aria-hidden="true">→</span>
          </a>
          <a className="button button-outline" href="#apropos">
            En savoir plus
          </a>
        </div>
      </div>

      <div
        className="hero-illustration"
        role="group"
        aria-label="Illustration d’une interface web, d’une tasse de café et d’une manette de jeu"
      >
        <div className="hero-note">
          Code
          <br />
          Game
          <br />
          Coffee
        </div>
        <div className="portrait-frame">
          <img
            src="/doodle-dev-hero.svg"
            alt="Doodle d’une interface web avec tasse de café et manette de jeu"
            width={700}
            height={480}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="hero-sticker" aria-hidden="true">
          ↗
        </div>
        <span className="hero-doodle doodle-left" aria-hidden="true">
          〰
        </span>
        <span className="hero-doodle doodle-right" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  )
}

export default HeroSection
