import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import Values from "./components/Values";
import Cta from "../components/Cta";

export const metadata = {
  title: "About — Mansu AE",
  description:
    "Learn about Mansu's mission to connect African businesses with the UAE and Middle East.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <Values />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
