import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700"], variable: "--nf-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--nf-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--nf-mono" });

export const metadata = {
  title: "Mukesh Kanna R — Full-Stack Developer",
  description:
    "Full-stack developer building healthcare EMR and multi-tenant SaaS platforms with React, Next.js, Node.js, MongoDB and MySQL.",
  keywords: ["Mukesh Kanna R", "Full-Stack Developer", "MERN", "Next.js", "React", "Node.js", "EMR", "HL7", "Portfolio"],
  authors: [{ name: "Mukesh Kanna R" }],
  openGraph: {
    title: "Mukesh Kanna R — Full-Stack Developer",
    description: "Healthcare EMR and multi-tenant SaaS, built with React, Next.js and Node.js.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F6F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0E181D" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
