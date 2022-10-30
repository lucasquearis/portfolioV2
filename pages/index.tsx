import type { NextPage } from "next";
import About from "../template/About";
import Projects from "../template/Projects";
import Welcome from "../template/Welcome";
import Work from "../template/Work";
import Contact from "../template/Contact";

const Home: NextPage = () => {
  return (
    <main className="bg-primary-background-primary p-6 md:p-0 md:px-28 lg:md:px-36">
      <Welcome />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
