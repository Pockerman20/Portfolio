import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const email = "diwakarsinghchauhan20@gmail.com";
const screens = [
  { name: "small phone", width: 320, height: 640 },
  { name: "phone", width: 390, height: 844 },
  { name: "large phone", width: 430, height: 932 },
  { name: "tablet portrait", width: 768, height: 1024 },
  { name: "tablet landscape", width: 1024, height: 768 },
  { name: "laptop", width: 1366, height: 768 },
  { name: "monitor", width: 1920, height: 1080 },
  { name: "ultrawide monitor", width: 2560, height: 1440 },
];

for (const screen of screens) {
  test(`layout and navigation on ${screen.name}`, async ({ page }) => {
    await page.setViewportSize(screen);
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Thoughtful code.");
    await expect(page.locator(".project-card")).toHaveCount(3);
    const portrait = page.getByRole("img", { name: "Diwakar Kumar Singh", exact: true });
    await expect(portrait).toBeVisible();
    await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    await expect(portrait).toHaveCSS("object-fit", "cover");
    await expect(page.locator(".code-window")).toHaveCount(1);
    await expect(page.locator(".hero-portrait .top-label")).toBeVisible();
    await expect(page.locator(".hero-portrait .top-label")).toHaveText("ALWAYS BUILDING");
    await expect(page.locator(".hero-portrait .bottom-label")).toBeVisible();
    await expect(page.locator(".hero-portrait .bottom-label")).toContainText("Built with purpose");
    await expect(page.locator(".portrait-orbit")).toHaveCount(2);
    const greeting = await page.locator(".hero-intro").boundingBox();
    const frame = await page.locator(".portrait-frame").boundingBox();
    const intro = await page.locator(".hero-copy").boundingBox();
    expect(greeting).not.toBeNull();
    expect(frame).not.toBeNull();
    expect(intro).not.toBeNull();
    if (screen.width < 768) {
      expect(frame!.y).toBeGreaterThan(greeting!.y + greeting!.height);
      expect(intro!.y).toBeGreaterThan(frame!.y + frame!.height);
      await expect(page.locator(".portrait-frame")).toHaveCSS("border-radius", "50%");
      expect(frame!.height).toBeCloseTo(frame!.width, 0);
    } else {
      expect(frame!.x).toBeGreaterThan(intro!.x + intro!.width);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
    if (screen.width < 768) {
      await expect(page.getByRole("navigation")).toBeHidden();
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(page.getByRole("navigation")).toBeVisible();
    }
    await page.getByRole("navigation").getByRole("link", { name: "Projects", exact: true }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.getByRole("heading", { name: "Ideas, brought to life." })).toBeInViewport();
    if (screen.width < 768) await expect(page.getByRole("navigation")).toBeHidden();
    await page.goto("/resume");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Diwakar Kumar Singh");
    expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)).toBe(false);
    expect(errors).toEqual([]);
  });
}

test("content uses the correct identity and requested experience dates", async ({ page }) => {
  for (const path of ["/", "/resume"]) {
    await page.goto(path);
    await expect(page.getByText("Apr 2026 — Present", { exact: true })).toBeVisible();
    await expect(page.getByText("Aug 2024 — Mar 2026", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Associate Software Engineer", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Software Engineer", exact: true })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Prateek Dey");
    await expect(page.locator("body")).not.toContainText("CMR Institute");
    await expect(page.locator("body")).not.toContainText("Feb 2024");
  }
});

test("theme toggle persists through reloads", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("system dark mode and reduced motion are respected", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});

test("mobile menu closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation")).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("contact and project links use resume URLs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Say hello" })).toHaveAttribute("href", `mailto:${email}`);
  await expect(page.getByRole("link", { name: "View source for E-Commerce App (opens in a new tab)" })).toHaveAttribute("href", "https://github.com/Pockerman20/e_Commerce_app");
  await expect(page.getByRole("link", { name: "View source for Sorting Visualizer (opens in a new tab)" })).toHaveAttribute("href", "https://github.com/Pockerman20/Sorting-Visualizer");
  await expect(page.getByRole("link", { name: "View source for Personal Expense App (opens in a new tab)" })).toHaveAttribute("href", "https://github.com/Pockerman20/Personal_Expense_App");
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  }
});

test("copy email reports success and handles denied clipboard access", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async (text: string) => { document.documentElement.dataset.copied = text; } } });
  });
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("button", { name: "Email copied" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-copied", email);
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async () => { throw new Error("Permission denied"); } } });
  });
  await page.getByRole("button", { name: "Email copied" }).click();
  await expect(page.getByRole("status")).toContainText("Copy unavailable");
});

test("résumé is printable and has a working print action", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "View résumé" }).click();
  await expect(page).toHaveURL(/\/resume$/);
  await page.evaluate(() => { window.print = () => { document.documentElement.dataset.printed = "true"; }; });
  await page.getByRole("button", { name: "Print / Save as PDF" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-printed", "true");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".resume-actions")).toBeHidden();
  await expect(page.getByRole("heading", { name: "Diwakar Kumar Singh", exact: true })).toBeVisible();
});

test("résumé content fits within one A4 printable area", async ({ page }) => {
  // A4 minus the CSS page margins: 186mm wide by 277mm tall at 96 CSS px/in.
  const printableWidth = Math.floor(186 * 96 / 25.4);
  const printableHeight = Math.floor(277 * 96 / 25.4);
  await page.setViewportSize({ width: printableWidth, height: printableHeight });
  await page.goto("/resume");
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  const paper = await page.locator(".resume-paper").boundingBox();
  expect(paper).not.toBeNull();
  expect(paper!.height).toBeLessThanOrEqual(printableHeight);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(printableWidth);
  await expect(page.getByRole("heading", { name: "Achievements & community" })).toBeVisible();
  await expect(page.locator(".resume-section").last().locator("li").last()).toContainText("sports meet");
});

for (const theme of ["light", "dark"] as const) {
  test(`accessible in ${theme} theme on desktop and mobile`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [1366, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(results.violations).toEqual([]);
    }
    await page.goto("/resume");
    const resume = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(resume.violations).toEqual([]);
  });
}

test("sharing metadata, sitemap and private document boundaries", async ({ page, request }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Diwakar Kumar Singh | Software Engineer");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Diwakar Kumar Singh/);
  const imageUrl = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(imageUrl).toBeTruthy();
  const imagePath = new URL(imageUrl!).pathname;
  const image = await request.get(imagePath);
  expect(image.ok()).toBe(true);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/robots.txt")).ok()).toBe(true);
  expect((await request.get("/sitemap.xml")).ok()).toBe(true);
  for (const name of ["Diwakar_Kumar_Singh_Resume.pdf", "Prateek_Resume.pdf"]) {
    expect((await request.get(`/${name}`)).status()).toBe(404);
  }
});