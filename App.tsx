import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';

export default function App() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
