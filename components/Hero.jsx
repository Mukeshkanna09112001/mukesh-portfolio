"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import EmailButton from "@/components/EmailButton";

const FIELDS = [
  { v: "PID", label: "Segment", note: "Patient identification. Here, the patient is the developer." },
  { v: "1", label: "Set ID", note: "One of one." },
  { v: "MKR-2023", label: "Identifier", note: "Writing production code since 2023." },
  { v: "R^MUKESH KANNA", label: "Name", note: "Family name first, the HL7 way." },
  { v: "FULL-STACK ENGINEER", label: "Role", note: "Frontend, backend, database and deployment." },
  { v: "NEURULA TECHNOLOGIES", label: "Current employer", note: "EMR platform for UAE healthcare." },
  { v: "REACT^NEXT^NODE^MONGO^MYSQL", label: "Stack", note: "Components separated by ^, as in a real message." },
  { v: "IN", label: "Based in", note: "India, working with teams in the UAE." },
];
const NAME_INDEX = 3;

export default function Hero() {
  const [active, setActive] = useState(0);

  // One sequence on load: walk the segment, then settle on the name field.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(NAME_INDEX);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setActive(i);
      if (i >= NAME_INDEX) clearInterval(id);
    }, 520);
    return () => clearInterval(id);
  }, []);

  const f = FIELDS[active];
  const showResume = typeof window === "undefined" || !window.__PREVIEW__;

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hl7" aria-label="Profile written as an HL7 PID segment">
          <div className="hl7-line" role="group">
            {FIELDS.map((field, i) => (
              <span key={i}>
                {i > 0 && <span className="pipe">|</span>}
                <button
                  type="button"
                  className={"hl7-field" + (i === active ? " on" : "")}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  {field.v}
                </button>
              </span>
            ))}
          </div>
          <p className="hl7-caption" aria-live="polite">
            <strong>PID-{active} {f.label}.</strong> {f.note}
          </p>
        </div>

        <h1>{profile.name}</h1>
        <p className="lede">{profile.intro}</p>

        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">See my projects</a>
          <EmailButton className="btn">Email me</EmailButton>
          {showResume && (
            <a className="btn" href={profile.resume} download>Download résumé</a>
          )}
        </div>
      </div>
    </section>
  );
}
