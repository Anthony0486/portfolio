function AboutSection() {
  return (
    <section className="personal-section section-wrap" id="apropos" aria-labelledby="about-title">
      <article className="personal-card challenge-card">
        <span className="personal-icon" aria-hidden="true">
          ✦
        </span>
        <div>
          <p className="hand">Toujours partant</p>
          <h2 id="about-title">Pour de nouveaux défis !</h2>
          <p>
            En formation pour devenir développeur concepteur d’applications, je cherche à apprendre,
            progresser et relever de nouveaux challenges.
          </p>
          <a className="button button-primary" href="#contact">
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
      <article className="personal-card anecdote-card">
        <div>
          <h2 className="hand">Une petite anecdote ?</h2>
          <p>
            J’adore Nintendo depuis toujours ! J’ai grandi avec la Game Boy, et aujourd’hui encore,
            je prends autant de plaisir à découvrir de nouveaux univers.
          </p>
          <span className="hand anecdote-signature">Team Nintendo !</span>
        </div>
        <span className="game-icon" aria-hidden="true">
          🎮
        </span>
      </article>
    </section>
  )
}

export default AboutSection
