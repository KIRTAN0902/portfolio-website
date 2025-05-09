import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Portfolio from "@/components/home/portfolio";
import Contact from "@/components/home/contact";
import Footer from "@/components/layout/footer";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
