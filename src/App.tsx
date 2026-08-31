import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Approach from "./components/Approach";
import StoreCTA from "./components/StoreCTA";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Journey />
        <Approach />
        <StoreCTA />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
