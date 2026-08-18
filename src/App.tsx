import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { SeoHead } from "./components/SeoHead";
import { TechSection } from "./components/TechSection";
import { WorkSection } from "./components/WorkSection";
import { useActiveSection } from "./hooks/useActiveSection";
import { I18nProvider, useI18n } from "./i18n/I18nContext";

/** Module-level so the observer in useActiveSection isn't rebuilt every render. */
const SECTION_IDS = ["work", "about", "tech", "contact"] as const;

function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] bg-secondary-container text-background px-4 py-2 rounded"
    >
      {t.skipLink}
    </a>
  );
}

function AppShell() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <SeoHead />
      <SkipLink />
      <Nav />
      <main id="top" className="flex-grow pt-32 pb-stack-lg lg:max-w-[70%] mx-auto px-gutter w-full">
        <Hero />
        <WorkSection isActive={activeSection === "work"} />
        <AboutSection isActive={activeSection === "about"} />
        <TechSection isActive={activeSection === "tech"} />
        <ContactSection isActive={activeSection === "contact"} />
      </main>
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
