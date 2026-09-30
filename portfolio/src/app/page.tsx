import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2, Database, FileText, GraduationCap, Layers3, Mail, MapPin, Terminal, Trophy, Users } from "lucide-react";
import { FaGithub as Github, FaLinkedinIn as Linkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import { education, experience, profile, projects, skills } from "@/data/portfolio";
import { Header, CopyEmail } from "@/components/site-controls";

function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>;
}

function ProjectArtwork({ kind }: { kind: typeof projects[number]["kind"] }) {
  return <div className={`project-art ${kind}`} aria-hidden="true">
    <span className="concept-label">INTERFACE CONCEPT</span>
    {kind === "commerce" ? <div className="shop-concept"><div className="mini-top"><strong>the everyday store<span>.</span></strong><span>↗</span></div><div className="shop-content"><div className="product-shape"><div className="bag-handle"/><div className="bag"><span>e.</span></div></div><div><span className="mini-label">LESS, BUT BETTER</span><h4>Your everyday.<br/>Upgraded.</h4><div className="mini-button">Explore collection <ArrowRight size={12}/></div></div></div><div className="mini-bottom"><span>Thoughtfully selected</span><span>01 — 03</span></div></div>
    : kind === "sorting" ? <div className="sort-concept"><div className="mini-top"><span><Braces size={14}/> sort<span className="muted">/</span>view</span><span className="mini-pill">Bubble sort</span></div><div className="sort-bars">{[35, 58, 44, 79, 52, 90, 67, 100, 72, 115, 128, 143].map((height, i) => <div key={i} style={{ height }} className={i > 7 ? "sorted" : ""}/>)}</div><div className="mini-bottom"><span><i/> Making order from chaos</span><span>n = 12</span></div></div>
    : <div className="expense-concept"><div className="mini-top"><strong>pocket<span>.</span></strong><span className="mini-pill">This week ↗</span></div><span className="mini-label">A LITTLE MORE CLARITY</span><div className="expense-title">Know your spending<span>↗</span></div><div className="expense-chart">{[42, 70, 52, 92, 61, 110, 77].map((height, i) => <div key={i}><span style={{ height }}/><small>{["M", "T", "W", "T", "F", "S", "S"][i]}</small></div>)}</div></div>}
  </div>;
}

export default function Home() {
  const skillIcons = [Code2, Layers3, Database, Braces];
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header/>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <p className="eyebrow hero-intro"><span className="status-dot"/> HELLO, I’M DIWAKAR KUMAR SINGH</p>
        <div className="hero-portrait">
          <div className="visual-grid" aria-hidden="true"/>
          <div className="portrait-orbit orbit-inner" aria-hidden="true"/>
          <div className="portrait-orbit orbit-outer" aria-hidden="true"/>
          <div className="floating-label top-label"><span className="status-dot"/> ALWAYS BUILDING</div>
          <figure className="portrait-frame code-window">
            <div className="window-title"><span className="window-dots"><i/><i/><i/></span><span>the-engineer.ts</span><Terminal size={14}/></div>
            <div className="portrait-crop">
              <Image
                src="/diwakar-photo.jpeg"
                alt="Diwakar Kumar Singh"
                fill
                preload
                sizes="(min-width: 1600px) 358px, (min-width: 1101px) 328px, (min-width: 768px) 32vw, (max-width: 374px) 214px, 244px"
                className="portrait-image"
              />
            </div>
            <div className="code-footer"><span><i/> A little better, every iteration.</span><Braces size={14}/></div>
          </figure>
          <div className="floating-label bottom-label"><span className="label-icon"><Layers3 size={19}/></span><div>Built with purpose<small>From the backend to the screen.</small></div><Check size={15}/></div>
          <span className="visual-caption">CURIOUS MIND. ENGINEERING MINDSET.</span>
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">Thoughtful code.<br/><span>Meaningful</span><br className="desktop-break"/> impact.</h1>
          <p className="hero-description">Software engineer building reliable backend platforms and intuitive mobile experiences. A problem solver at heart, a builder by choice.</p>
          <div className="hero-actions"><a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={18}/></a><a href="/resume" className="button button-secondary"><FileText size={17}/> View résumé</a></div>
          <div className="hero-meta"><span><MapPin size={14}/>{profile.location}</span><span className="meta-divider"/><span>Currently at <strong>Syncron</strong></span></div>
        </div>
        <div className="hero-bottom"><a href="#about"><ArrowDown size={14}/> A little more about me</a><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={18}/></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode (opens in a new tab)"><SiLeetcode size={19} aria-hidden="true"/></a><span>LET’S CONNECT</span></div></div>
      </section>

      <section id="about" className="section section-tinted">
        <div className="container"><SectionHeading number="01" label="A LITTLE ABOUT ME" title="Curiosity is the starting point."/>
          <div className="about-grid"><div className="about-copy"><p>I’m Diwakar, a software engineer based in Bangalore. I work on backend platforms at <strong>Syncron Services India</strong>, connecting data, products and people through reliable software.</p><p>My journey began with a Computer Science degree at Bangalore Institute of Technology and a curiosity for how things work. That curiosity has taken me from visualizing sorting algorithms to building mobile apps and enterprise integrations.</p><p>Outside of code, I’ve helped bring people together through the OS Code Club — organizing events, supporting the community and learning along the way.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={16}/></a></div>
          <div className="about-stats"><div className="stat-card"><Code2 size={21}/><strong>270<span>+</span></strong><span>Problems solved</span><p>Across LeetCode, GFG,<br/>CodeChef & Codeforces</p></div><div className="stat-card"><GraduationCap size={21}/><strong>9.16<span>/10</span></strong><span>Engineering CGPA</span><p>Computer Science<br/>Bangalore Institute of Technology</p></div><div className="about-note"><span className="status-dot"/> Good software starts with understanding the problem.</div></div></div>
        </div>
      </section>

      <section id="experience" className="section container"><SectionHeading number="02" label="THE JOURNEY SO FAR" title="Building in the real world." description="From analytics integrations to enterprise platforms. Growing through the work that matters."/>
        <div className="experience-layout"><aside className="company-card"><span className="company-logo">S<span>↗</span></span><h3>{profile.company}</h3><p><MapPin size={14}/> Bangalore, India</p><div className="company-since">AUG 2024 — PRESENT</div><p className="company-note">Enterprise software.<br/>Real-world engineering.</p></aside><div className="timeline">{experience.map((job) => <article className="experience-item" key={job.role}><span className={`timeline-dot ${job.current ? "current" : ""}`}/><div className="job-heading"><h3>{job.role}</h3>{job.current && <span className="current-badge">CURRENT</span>}</div><p className="job-dates">{job.start} — {job.end}</p><p className="job-summary">{job.summary}</p><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div>
      </section>

      <section id="projects" className="section section-tinted"><div className="container"><SectionHeading number="03" label="SELECTED PROJECTS" title="Ideas, brought to life." description="A few things I’ve built to explore, solve and learn. Every project is another step forward."/>
        <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><ProjectArtwork kind={project.kind}/><div className="project-content"><p className="project-category"><span>{project.number} /</span> {project.category}</p><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}<ArrowUpRight size={20}/></a></h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="project-link"><Github size={16}/> View source <ArrowUpRight size={15}/><span className="sr-only"> for {project.title} (opens in a new tab)</span></a></div></article>)}</div>
        <a className="all-projects text-link" href={profile.github} target="_blank" rel="noreferrer">There’s more on GitHub <ArrowUpRight size={16}/></a>
      </div></section>

      <section id="skills" className="section container"><SectionHeading number="04" label="MY TOOLKIT" title="The tools behind the work." description="A foundation in problem solving. A practical set of tools to turn it into something useful."/>
        <div className="skills-grid">{skills.map((group, i) => { const Icon = skillIcons[i]; return <article className="skill-card" key={group.title}><span className="skill-icon"><Icon size={22}/></span><h3>{group.title}</h3><p>{group.subtitle}</p><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
      </section>

      <section className="section section-tinted" id="education"><div className="container"><SectionHeading number="05" label="FOUNDATIONS & BEYOND" title="Always a student."/>
        <div className="education-layout"><div className="education-list">{education.map(item => <article className="education-card" key={item.school}><GraduationCap size={23}/><div><p className="education-dates">{item.dates} <span>· {item.location}</span></p><h3>{item.school}</h3><p>{item.degree}</p><span className="grade">{item.grade}</span></div></article>)}</div><div className="beyond-card"><span className="eyebrow">BEYOND THE KEYBOARD</span><div><Users size={21}/><div><h3>Community, not just code.</h3><p>Advisor & former Event Team Head at OS Code Club, BIT. Helped organize Manthan, Crack the Code and Funathon, including an event with 200+ registrations.</p></div></div><div><Trophy size={21}/><div><h3>A little competitive spirit.</h3><p>Third place in shot put at the Bangalore Institute of Technology sports meet.</p></div></div></div></div>
      </div></section>

      <section id="contact" className="section container contact-section"><div className="contact-card"><div className="contact-orbit"/><p className="eyebrow"><span className="status-dot"/> LET’S START A CONVERSATION</p><h2>Have something in mind?<br/><span>Let’s build on it.</span></h2><p>A project, an opportunity, or a good conversation about technology.<br className="desktop-break"/> I’d love to hear from you.</p><div className="contact-actions"><a href={`mailto:${profile.email}`} className="button button-primary"><Mail size={17}/> Say hello <ArrowUpRight size={17}/></a><CopyEmail/></div><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="container footer"><a href="#" className="wordmark">Diwakar<span>.</span></a><p>© {new Date().getFullYear()} Diwakar Kumar Singh. Built with intention.</p><a href="#main">Back to top <ArrowUpRight size={14}/></a></footer>
  </>;
}
