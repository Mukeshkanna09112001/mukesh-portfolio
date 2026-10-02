import Section from "@/components/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skills.map(([group, list]) => (
          <div className="skill-row" key={group}>
            <dt>{group}</dt>
            <dd>{list}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
