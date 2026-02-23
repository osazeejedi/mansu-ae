import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
