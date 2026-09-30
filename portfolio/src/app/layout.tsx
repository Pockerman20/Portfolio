import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "@fontsource-variable/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Diwakar Kumar Singh | Software Engineer", template: "%s | Diwakar Kumar Singh" },
  description: "Software engineer in Bangalore building reliable backend platforms and intuitive Flutter apps. Explore Diwakar Kumar Singh’s experience, projects and engineering journey.",
  authors: [{ name: "Diwakar Kumar Singh" }],
  openGraph: { type: "website", locale: "en_IN", siteName: "Diwakar Kumar Singh", title: "Diwakar Kumar Singh | Software Engineer", description: "Thoughtful code. Meaningful impact. Backend platforms, mobile experiences and a curiosity for building things that work." },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){}})()` }}/>
      </head>
      <body>{children}</body>
    </html>
  );
}
