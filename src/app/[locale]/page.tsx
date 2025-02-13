import { About, Contact, Experience, Footer, Hero, Tech, Works } from "@/components";
import { FloatingNav } from "@/components/floating-navbar";
import { navItems } from "@/constants";

// TODO: modify metadata of favicon, title, desc, etc.
// TODO: add sentry to monitor traffic
// TODO: do lighthouse SEO testing
// TODO: add og image for social platform (low priority)
export default function Home() {
  return (
    <div className="relative min-h-dvh bg-custom-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <About />
      <Tech />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
