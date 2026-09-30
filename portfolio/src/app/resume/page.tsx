import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PrintResume } from "@/components/site-controls";
import {
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Experience, projects and education of Diwakar Kumar Singh, Software Engineer.",
};

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-actions">
        <Link className="text-link" href="/">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <PrintResume />
      </div>
      <article className="resume-paper">
        <header>
          <h1>{profile.name}</h1>
          <p className="resume-title">{profile.role}</p>
          <div className="resume-contact">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              {profile.phone}
            </a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
            <a href={profile.leetcode}>LeetCode</a>
          </div>
        </header>
        <section className="resume-section">
          <h2>Professional experience</h2>
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{profile.company}</span>
            <span>Bangalore</span>
          </h3>
          {experience.map((job) => (
            <div className="resume-entry" key={job.role}>
              <div className="resume-entry-heading">
                <h4>{job.role}</h4>
                <span>
                  {job.start} — {job.end}
                </span>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className="resume-entry" key={project.title}>
              <div className="resume-entry-heading">
                <h3>{project.title}</h3>
                <span>{project.tags.join(" · ")}</span>
              </div>
              <p>{project.description}</p>
              <p>{project.features.join(" · ")}</p>
              <a href={project.href}>{project.href.replace("https://", "")}</a>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          {skills.map((group) => (
            <p key={group.title}>
              <strong>{group.title}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          {education.map((item) => (
            <div className="resume-entry" key={item.school}>
              <div className="resume-entry-heading">
                <h3>{item.school}</h3>
                <span>{item.dates}</span>
              </div>
              <p>
                {item.degree} · {item.grade} · {item.location}
              </p>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h2>Achievements & community</h2>
          <ul>
            <li>
              Solved 270+ questions across LeetCode, GeeksforGeeks, CodeChef and
              Codeforces.
            </li>
            <li>
              Advisor and former Event Team Head at OS Code Club, BIT. Organized
              technical and non-technical events including Manthan, Crack the
              Code and Funathon, with 200+ registrations for an event.
            </li>
            <li>
              Secured third place in shot put at the Bangalore Institute of
              Technology sports meet.
            </li>
          </ul>
        </section>
      </article>
      <p className="resume-footnote">
        Choose “Save as PDF”, A4 paper, portrait orientation and 100% scale.
        Keep margins set to Default and turn off headers and footers for a
        single-page résumé.
      </p>
    </main>
  );
}
