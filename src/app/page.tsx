import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from "@/components";
import { FloatingNav } from "@/components/floating-navbar";
import { navItems } from "@/constants";

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
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
