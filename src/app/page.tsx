import { About, Contact, Experience, Feedbacks, StarsCanvas, Tech, Works } from "@/components";
import { FloatingNav } from "@/components/floating-navbar";
import { Hero } from "@/components/hero";
import { Spotlight } from "@/components/ui/spotlight-new";

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
        {/* TODO: maybe remove later, not sure if it's needed */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 亮一点 */}
          {/* <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(250, 100%, 85%, .12) 0, hsla(250, 100%, 55%, .06) 50%, hsla(250, 100%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(250, 100%, 85%, .10) 0, hsla(250, 100%, 55%, .04) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(250, 100%, 85%, .08) 0, hsla(250, 100%, 45%, .03) 80%, transparent 100%)"
            translateY={-100}
            width={800}
            height={800}
            smallWidth={300}
            duration={10}
            xOffset={100}
          /> */}
          {/* 暗一点，看起来更加契合整体的风格和色调 */}
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(250, 100%, 85%, .10) 0, hsla(250, 100%, 55%, .04) 50%, hsla(250, 100%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(250, 100%, 85%, .08) 0, hsla(250, 100%, 55%, .03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(250, 100%, 85%, .06) 0, hsla(250, 100%, 45%, .02) 80%, transparent 100%)"
            translateY={-100}
            width={800}
            height={800}
            smallWidth={300}
            duration={10}
            xOffset={100}
          />
        </div>

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
