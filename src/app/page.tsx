import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from "@/components";
import { FloatingNav } from "@/components/floating-navbar";

export default function Home() {
  // TODO: dummy
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Tech", link: "#tech" },
    { name: "Works", link: "#works" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative min-h-dvh bg-custom-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
