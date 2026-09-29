import About from "./components/layout/Home/About";
import Events from "./components/layout/Home/Events";
import Hero from "./components/layout/Home/Hero";
import JoinUs from "./components/layout/Home/JoinUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <JoinUs />
      <Events />
    </div>
  );
}