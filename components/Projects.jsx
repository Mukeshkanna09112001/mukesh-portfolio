import Section from "@/components/Section";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="What I built on each, and where AI tools fit into the work.">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className={"project" + (p.current ? " is-current" : "")}>
            <header className="project-head">
              <h3>{p.name}</h3>
              {p.current && <span className="badge">In progress</span>}
            </header>
            <p className="project-summary">{p.summary}</p>
            <ul className="points">
              {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            <details className="ai">
              <summary>How I used AI here</summary>
              <div className="ai-body">
                <p><strong>Tools:</strong> {p.ai.tools}</p>
                <p>{p.ai.how}</p>
              </div>
            </details>
            <ul className="tags" aria-label="Technologies">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
