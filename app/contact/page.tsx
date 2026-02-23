import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact — Mansu AE",
  description:
    "Get in touch with the Mansu AE team in Dubai. We're here to help your business expand into the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
