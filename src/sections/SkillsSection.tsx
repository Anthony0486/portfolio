const skills = [
  { name: 'React', detail: 'TypeScript', mark: '⚛', color: 'blue' },
  { name: 'Next.js', detail: '', mark: 'N', color: 'lilac' },
  { name: 'Symfony', detail: 'PHP', mark: 'Sf', color: 'pink' },
  { name: 'Node.js', detail: '', mark: 'JS', color: 'green' },
  { name: 'Docker', detail: '', mark: '▤', color: 'blue' },
  { name: 'MySQL', detail: '', mark: '⌁', color: 'yellow' },
  { name: 'Oracle SQL', detail: 'Developer', mark: '◉', color: 'lilac' },
]

function SkillsSection() {
  return (
    <section className="skills-section section-wrap" aria-labelledby="skills-title">
      <div className="section-title-row">
        <h2 id="skills-title">
          <span aria-hidden="true">↘</span> Mes compétences
        </h2>
        <p className="hand">
          Des outils que j’utilise
          <br />
          au quotidien ↙
        </p>
      </div>
      <ul className="skills-grid" aria-label="Technologies et outils">
        {skills.map((skill) => (
          <li className={`skill-card ${skill.color}`} key={skill.name}>
            <span className="skill-mark" aria-hidden="true">
              {skill.mark}
            </span>
            <span className="skill-name">{skill.name}</span>
            {skill.detail && <span className="skill-detail">{skill.detail}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection
