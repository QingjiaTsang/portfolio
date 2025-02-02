import { About, Contact, Experience, Feedbacks, StarsCanvas, Tech, Works } from "@/components";
import { FloatingNav } from "@/components/floating-navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  // TODO: dummy
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Tech", link: "/tech" },
    { name: "Works", link: "/works" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative bg-custom-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
