import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
