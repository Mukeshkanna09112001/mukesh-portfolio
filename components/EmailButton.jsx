"use client";
import { useState } from "react";
import { profile } from "@/data/profile";

// mailto only works when the visitor has a mail app set up (often not the case on
// desktop browsers). So a click also copies the address and offers Gmail as a fallback.
export default function EmailButton({ className, children }) {
  const [copied, setCopied] = useState(false);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  const handleClick = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 6000);
  };

  return (
    <span className="email-wrap">
      <a className={className} href={`mailto:${profile.email}`} onClick={handleClick}>
        {children}
      </a>
      {copied && (
        <span className="email-toast" role="status">
          Address copied: {profile.email}.{" "}
          <a href={gmail} target="_blank" rel="noopener noreferrer">Open in Gmail</a>
        </span>
      )}
    </span>
  );
}
