import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Architecture from "../components/Architecture";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Roadmap />
      <Footer />
    </>
  );
}
