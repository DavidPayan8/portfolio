import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { SeoHead } from "./components/SeoHead";
import { WorkSection } from "./components/WorkSection";
import { I18nProvider, useI18n } from "./i18n/I18nContext";

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
  return (
    <>
      <SeoHead />
      <SkipLink />
      <Nav />
      <main id="top" className="flex-grow pt-32 pb-stack-lg max-w-container-max mx-auto px-gutter w-full">
        <Hero />
        <WorkSection />
        <AboutSection />
      </main>
      <Footer />
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
