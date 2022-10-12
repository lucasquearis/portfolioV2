import type { NextPage } from "next";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <main className="bg-primary-background p-6">
      <Welcome />
      <div className="h-96"></div>
    </main>
  );
};

export default Home;
