import React from "react";
import { About } from "./components/components/About";
import { Contact } from "./components/components/Contacts";
import { Footer } from "./components/components/Footer";
import { Hero } from "./components/components/Hero";
import { Projects } from "./components/components/Project";
import { Skills } from "./components/components/Skills";
import { Navbar } from "./components/components/Navbar";
import { ThemeProvider } from "./components/components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="bg-white dark:bg-black min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
