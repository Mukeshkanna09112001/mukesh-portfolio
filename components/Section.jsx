export default function Section({ id, title, intro, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap section-grid">
        <div className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
