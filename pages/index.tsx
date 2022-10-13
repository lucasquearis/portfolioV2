import type { NextPage } from "next";
import About from "../components/About";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <main className={`bg-primary-background p-6`}>
      <Welcome />
      <About />
    </main>
  );
};

export default Home;
