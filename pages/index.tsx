import type { NextPage } from "next";
import About from "../template/About";
import Projects from "../template/Projects";
import Welcome from "../template/Welcome";
import Work from "../template/Work";

const Home: NextPage = () => {
  return (
    <main className={`bg-primary-background p-6`}>
      <Welcome />
      <About />
      <Work />
      <Projects />
    </main>
  );
};

export default Home;
