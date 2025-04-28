import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from './(sections)/Hero';
import About from './(sections)/About';
import Skills from './(sections)/Skills';
import Projects from './(sections)/Projects';
import Contact from './(sections)/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* Other sections will be added here */}
    </>
  );
}
