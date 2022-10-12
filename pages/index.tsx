import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Slide } from "react-animated-components";

const Home: NextPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  useEffect(() => {
    var oldScrollY = window.scrollY;
    window.onscroll = function (e) {
      if (oldScrollY < window.scrollY) {
        setShowMobileMenu(false);
      } else {
        setShowMobileMenu(true);
      }
      oldScrollY = window.scrollY;
    };
  });

  useEffect(() => {
    console.log(showMobileMenu);
  }, [showMobileMenu]);

  return (
    <main className="bg-[#0A192F] p-6">
      <section className="flex min-h-screen flex-col items-start justify-center gap-4 p-0">
        <Slide fade up delayMs={200} durationMs={300}>
          <p className="font-mono text-lg text-[#64ffda]">Hi, my name is</p>
        </Slide>
        <Slide fade up delayMs={300} durationMs={600}>
          <h2 className="text-4xl font-bold text-[#ccd6f6]">
            Lucas A. Santos.
          </h2>
        </Slide>
        <Slide fade up delayMs={400} durationMs={1000}>
          <h3 className="text-4xl font-bold text-[#8892b0]">
            I build things for the web
          </h3>
        </Slide>
        <Slide fade up delayMs={500} durationMs={1300}>
          <p className="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            impedit veniam ab consectetur quos molestias ratione assumenda
            officia, esse
          </p>
        </Slide>
        <Slide className="mt-5 w-full" fade up delayMs={600} durationMs={1600}>
          <button className="w-full rounded-md border-2 border-[#64ffda] p-4 font-mono text-[#64ffda]">
            Download my CV!
          </button>
        </Slide>
      </section>
      <div className="h-96"></div>
    </main>
  );
};

export default Home;
