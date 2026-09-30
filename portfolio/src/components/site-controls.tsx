"use client";

import { Check, Copy, Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

const navigation = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Storage may be disabled. */ }
      const next = saved ? saved === "dark" : media.matches;
      document.documentElement.dataset.theme = next ? "dark" : "light";
      setDark(next);
    };
    syncTheme();
    media.addEventListener("change", syncTheme);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-20% 0px -55% 0px" });
    navigation.forEach(name => { const section = document.getElementById(name.toLowerCase()); if (section) observer.observe(section); });
    return () => { observer.disconnect(); media.removeEventListener("change", syncTheme); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } };
    const closeOnDesktop = () => { if (window.innerWidth >= 768) setOpen(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", closeOnDesktop);
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", closeOnDesktop); };
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Theme still works without storage. */ }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Diwakar home">Diwakar<span>.</span></Link>
        <nav id="primary-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
          {navigation.map(name => (
            <a key={name} href={`#${name.toLowerCase()}`} aria-current={active === name.toLowerCase() ? "location" : undefined} onClick={() => setOpen(false)}>{name}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <a href={`mailto:${profile.email}`} className="header-contact">Let’s talk <ArrowUpRight size={15}/></a>
          <button ref={menuButton} type="button" className="icon-button menu-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>
    </header>
  );
}

export function CopyEmail() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try { await navigator.clipboard.writeText(profile.email); setState("copied"); } catch { setState("failed"); }
    timer.current = setTimeout(() => setState("idle"), 4000);
  }
  return <div className="copy-control"><button className="button button-secondary" onClick={copy}>{state === "copied" ? <Check size={16}/> : <Copy size={16}/>} {state === "copied" ? "Email copied" : "Copy email"}</button><span className="copy-feedback" role="status">{state === "failed" ? "Copy unavailable. Select the email below or use Say hello." : state === "copied" ? "Copied to clipboard." : ""}</span></div>;
}

export function PrintResume() {
  return <button type="button" className="button button-primary" onClick={() => window.print()}>Print / Save as PDF <ArrowUpRight size={16}/></button>;
}