import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Activities from "./components/Activities";
import Objectives from "./components/Objectives";
import About from "./components/About";
import Contact from "./components/Contact";

declare global {
  interface Window {
    gsap: {
      registerPlugin: (plugin: unknown) => void;
      fromTo: (targets: unknown, fromVars: unknown, toVars: unknown) => unknown;
      timeline: () => unknown;
      set: (targets: unknown, vars: unknown) => unknown;
      to: (targets: unknown, vars: unknown) => unknown;
      from: (targets: unknown, vars: unknown) => unknown;
    };
    ScrollTrigger: {
      create: (vars: unknown) => unknown;
      refresh: () => void;
      getAll: () => unknown[];
      killAll: () => void;
    };
  }
}
const loadGSAP = () => {
  if (typeof window !== "undefined" && !window.gsap) {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    document.head.appendChild(script);

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;
    document.head.appendChild(scrollTriggerScript);
  }
};

const App = () => {
  useEffect(() => {
    loadGSAP();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
