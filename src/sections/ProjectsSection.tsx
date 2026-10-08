const projects = [
  {
    title: 'Collectendo',
    description: 'Application de collection Nintendo',
    detail:
      'Une app pour les passionnés : gérez votre collection de jeux, consoles et accessoires.',
    tags: ['PHP', 'MySQL', 'IGDB API'],
    art: 'collectendo',
    color: 'pink',
  },
  {
    title: 'Task MVC',
    description: 'Application de gestion de tâches',
    detail: 'Une petite app en PHP avec une architecture MVC pour gérer les tâches au quotidien.',
    tags: ['PHP', 'MySQL', 'MVC'],
    art: 'task-mvc',
    color: 'blue',
  },
  {
    title: 'Portfolio',
    description: 'Mon site personnel',
    detail:
      'Un espace pour présenter mes projets, mon parcours et ma passion pour le développement.',
    tags: ['React', 'TypeScript', 'Next.js'],
    art: 'portfolio',
    color: 'green',
  },
]

function ProjectsSection() {
  return (
    <section
      className="projects-section section-wrap"
      id="projets"
      aria-labelledby="projects-title"
    >
      <div className="section-title-row">
        <h2 id="projects-title">
          <span aria-hidden="true">✳</span> Mes projets <span aria-hidden="true">✳</span>
        </h2>
        <a className="text-link" href="#contact">
          Me parler d’un projet <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.color}`} key={project.title}>
            <div className={`project-art ${project.art}`} aria-hidden="true">
              {project.art === 'collectendo' && (
                <div className="console-art">
                  <span />
                  <i />
                  <b />
                </div>
              )}
              {project.art === 'task-mvc' && (
                <div className="checklist-art">
                  <span>✓</span>
                  <span>✓</span>
                  <span>○</span>
                </div>
              )}
              {project.art === 'portfolio' && (
                <div className="browser-art">
                  <span>‹ / ›</span>
                  <i />
                </div>
              )}
              <span className="art-spark" aria-hidden="true">
                ✦
              </span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-detail">{project.detail}</p>
            <div className="project-bottom">
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
