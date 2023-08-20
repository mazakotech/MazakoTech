import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Infiniteslide from "./components/infiniteslide";
import Form from "./components/form";
import Services from "./components/services";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Particles from "./components/particles";
import Top from "./components/top";

export default function Home() {
  return (
    <main className="scroll-smoot">
      <Top />
      <Particles />
      <Navigation />
      <Hero />
      <Infiniteslide />
      <Services />
      <Banner />

      <Form />
      <Footer />
    </main>
  );
}
