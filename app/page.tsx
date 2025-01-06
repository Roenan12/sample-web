import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-muted"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Contact Us
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
