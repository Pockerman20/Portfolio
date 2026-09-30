# Diwakar Kumar Singh — Portfolio

A responsive, statically rendered Next.js App Router portfolio with TypeScript, Tailwind CSS, Lucide icons and self-hosted DM Sans typography. The design pairs a warm neutral canvas with forest-green accents, an optional dark theme and original CSS project illustrations. No database, credentials or external font requests are needed.

## Local development

Use Node.js 22 LTS or newer. From this directory, install the locked dependencies with `npm ci` and start development with `npm run dev`. The portfolio is available at http://localhost:3000. The workspace also includes a VS Code task named **Portfolio: development server**.

`npm run build` produces the production build, and `npm start` serves it. Both the homepage and résumé are statically generated. The résumé has a **Print / Save as PDF** action with A4 print styling.

## Content and sources

The shared content in [src/data/portfolio.ts](src/data/portfolio.ts) drives both the portfolio and résumé. Personal details, education, projects, skills, achievements and profile links come from Diwakar’s supplied resume. Only the Syncron company experience comes from the second supplied resume, as requested. Its dates are **Associate Software Engineer: August 2024–March 2026** and **Software Engineer: April 2026–Present**. Experience wording is condensed for readability.

Review the borrowed company responsibilities and the 20+ API metric for personal accuracy before publishing. No credentials, qualifications, certifications or achievements from the other person’s resume were included. The source PDFs are not in the app’s public directory and are ignored by the workspace Git configuration.

Project illustrations are clearly labelled **Interface concept**; they are original decorative previews, not screenshots of the actual apps. Project links point to the repositories in Diwakar’s resume. Replace the artwork with genuine screenshots if desired. The website has working email and social links, not a pretend contact form; sending mail requires a configured email app. Clipboard controls report browser permission failures accessibly.

The printable résumé includes Diwakar’s phone number and email. Publishing makes those details publicly accessible. Remove the phone from [src/app/resume/page.tsx](src/app/resume/page.tsx) if it should remain private.

## Design and accessibility

The layout adapts from 320px phones to 2560px monitors with constrained reading widths. Mobile navigation supports Escape to close, touch targets, visible keyboard focus and a skip link. Theme preference follows the operating system until manually changed, then persists locally. Reduced-motion preferences disable smooth scrolling and transitions. Content is rendered on the server; only interactive controls need client JavaScript.

## Verification

`npm run lint` and `npm run typecheck` validate the source. Install test browsers with `npx playwright install chromium webkit`, run `npm run build`, then run `npm run test:e2e`. Tests start a production server automatically on port 3100. They cover eight viewport sizes in Chromium and WebKit, experience dates, navigation, theme persistence, contact URLs, clipboard feedback, print controls, metadata, private-document boundaries, and automated WCAG A/AA checks using axe. Clipboard and print APIs are stubbed in interaction tests; sending external mail and the operating-system print dialog are not automated. Automated accessibility checks do not replace assistive-technology testing.

## Publish and share

Create a GitHub repository and import it into [Vercel](https://vercel.com/new). If uploading the full workspace, select **portfolio** as the Root Directory. If uploading only this directory, leave Root Directory at the repository root. Choose the Next.js framework preset and keep the detected build settings. The source PDFs must remain outside the deployment directory.

Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS address, such as your Vercel domain or custom domain, and redeploy. Vercel’s production domain is detected automatically when this variable is absent. This address is used for social images and the sitemap; the localhost fallback is only for local development. A branded Open Graph image, favicon, page metadata, robots file and sitemap are included. No hosting account or public deployment has been created automatically.
