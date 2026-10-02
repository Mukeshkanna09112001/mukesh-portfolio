import { profile } from "@/data/profile";
import EmailButton from "@/components/EmailButton";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Hiring for a full-stack or healthcare product role? Let's talk.</h2>
        <EmailButton className="contact-email">{profile.email}</EmailButton>
        <p className="contact-links">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <span aria-hidden="true">/</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span aria-hidden="true">/</span>
          <span>Based in {profile.location}</span>
        </p>
      </div>
      <footer className="wrap footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and React.</p>
      </footer>
    </section>
  );
}
