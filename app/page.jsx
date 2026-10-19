import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import ProductShowcase from '../components/ProductShowcase';
import AIHighlight from '../components/AIHighlight';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Benefits />
        <ProductShowcase />
        <AIHighlight />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
