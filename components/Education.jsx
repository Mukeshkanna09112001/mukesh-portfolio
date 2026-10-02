import Section from "@/components/Section";
import { education, certifications } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="edu">
        {education.map((e) => (
          <li key={e.title}>
            <div><h3>{e.title}</h3><p>{e.place}</p></div>
            <p className="edu-dates">{e.dates}</p>
          </li>
        ))}
      </ul>
      <h3 className="sub-h">Certifications</h3>
      <ul className="edu">
        {certifications.map((c) => (
          <li key={c.title}><div><h3>{c.title}</h3><p>{c.place}</p></div></li>
        ))}
      </ul>
    </Section>
  );
}
