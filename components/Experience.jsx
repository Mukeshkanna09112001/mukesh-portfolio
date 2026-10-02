import Section from "@/components/Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Three years, three companies, most recent first.">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className={job.current ? "is-current" : ""}>
            <p className="tl-dates">{job.dates}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="tl-company">{job.company}</p>
              <ul className="points">
                {job.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
