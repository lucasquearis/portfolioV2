import type { NextPage } from "next";
import About from "../template/About";
import Welcome from "../template/Welcome";
import Work from "../template/Work";

const Home: NextPage = () => {
  return (
    <main className={`bg-primary-background p-6`}>
      <Welcome />
      <About />
      <Work />
    </main>
  );
};

export default Home;
