import { useState } from 'react'
import './style.css'

const projects = [
  {
    number: '01',
    title: 'Lisière',
    kind: 'Identité · Boutique en ligne',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Intérieur lumineux aux matières naturelles',
    theme: 'sage',
  },
  {
    number: '02',
    title: 'Tempo',
    kind: 'Produit numérique · Application',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Personnes travaillant ensemble autour d’un ordinateur',
    theme: 'coral',
  },
  {
    number: '03',
    title: 'Le panier juste',
    kind: 'E-commerce · Circuit court',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Étal de fruits et légumes frais',
    theme: 'yellow',
  },
]
const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Navigation principale">
          <a className="wordmark" href="#accueil" onClick={closeMenu}>
            anthony<span>.</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Fermer' : 'Menu'}
          </button>
          <div
            className={`nav-links${menuOpen ? ' is-open' : ''}`}
            id="navigation-links"
          >
            <a href="#projets" onClick={closeMenu}>Projets</a>
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Me contacter <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Portfolio · Design & développement web</p>
            <h1>Des idées claires.<br />Des expériences <span className="scribble">qui restent.</span></h1>
            <p className="hero-intro">
              Bonjour, moi c’est Anthony. Je conçois des expériences numériques
              utiles, accessibles et pleines de caractère.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">
                Découvrir les projets <span aria-hidden="true">↓</span>
              </a>
              <span className="hand-note">Fait avec soin, à chaque détail.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Aperçu de projets de design numérique">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-note note-top">Curiosité<br />en mouvement</div>
            <div className="art-note note-bottom">Design · Code · Café</div>
            <div className="art-board">
              <div className="board-topline"><span>ÉCRAN 01</span><span>2026</span></div>
              <div className="board-image">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
                  alt="Bureau de création numérique avec ordinateur portable"
                />
                <span className="board-sticker">Idées<br />en forme</span>
              </div>
              <div className="board-caption">
                <span>Concevoir avec intention</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
            <span className="art-spark spark-one" aria-hidden="true">✳</span>
            <span className="art-spark spark-two" aria-hidden="true">✳</span>
          </div>
          <a className="scroll-cue" href="#projets"><span /> Faire défiler</a>
        </section>

        <section className="projects section-wrap" id="projets">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Sélection · 2024 — 2026</p>
              <h2>Des projets <span className="scribble">bien pensés.</span></h2>
            </div>
            <p className="section-aside">Trois explorations pour montrer<br />différentes façons de résoudre un problème.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.theme}`} key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <span className="concept-label">Projet conceptuel</span>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.kind}</p>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="apropos">
          <div className="about-inner section-wrap">
            <div className="about-label">
              <p className="eyebrow">Un peu de méthode</p>
              <span className="about-mark" aria-hidden="true">A.</span>
            </div>
            <div className="about-copy">
              <h2>Le beau attire.<br /><span>Le juste donne envie de rester.</span></h2>
              <p>
                J’aime rendre les idées complexes simples à parcourir. Du premier
                croquis à la mise en ligne, je cherche l’équilibre entre une
                direction visuelle singulière, un usage évident et un web plus
                léger.
              </p>
              <div className="principles">
                <div><span>01</span><strong>Écouter avant de dessiner</strong></div>
                <div><span>02</span><strong>Soigner chaque interaction</strong></div>
                <div><span>03</span><strong>Construire pour durer</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">Une idée en tête ?</p>
          <h2>On en fait<br /><span className="scribble">quelque chose de beau.</span></h2>
          <a className="button button-dark" href="mailto:bonjour@exemple.fr">
            Écrire un message <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">Remplace cette adresse par ton e-mail avant publication.</p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#accueil">anthony<span>.</span></a>
        <p>© {currentYear} Anthony · Fait avec attention.</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  )
}

export default App
