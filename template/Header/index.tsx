import { useEffect, useState } from "react";
import { Fade } from "react-animated-components";
import { HEADER_OPTIONS } from "../../constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  useEffect(() => {
    var oldScrollY = window.scrollY;
    window.onscroll = function (e) {
      if (oldScrollY < window.scrollY) {
        setMenuOpen(false);
        setTimeout(() => {
          setShowMobileMenu(false);
        }, 300);
      } else {
        setMenuOpen(false);
        setTimeout(() => {
          setShowMobileMenu(true);
        }, 300);
      }
      oldScrollY = window.scrollY;
    };
  }, []);

  return (
    <>
      <header
        className={`fixed z-20 w-full bg-primary-background-opacity shadow-custom backdrop-blur-sm`}
      >
        <Fade delayMs={300} durationMs={600}>
          <nav className="px-6 text-white">
            <div
              className={`${menuOpen ? "iconActive" : ""} ${
                showMobileMenu
                  ? "visible h-16 overflow-auto"
                  : "invisible h-0 overflow-hidden"
              } flex items-center justify-between transition-all duration-150`}
            >
              <h1 className="overflow-hidden text-5xl text-primary-text-primary shadow">
                L
              </h1>
              <button
                className={`hamburger before:bg-primary-text-primary after:bg-primary-text-primary ${
                  menuOpen
                    ? "bg-transparent shadow-none before:top-0 before:rotate-[135deg] after:top-0 after:rotate-[225deg]"
                    : "bg-primary-text-primary"
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            <div
              className={`${
                menuOpen ? "w-[70%]" : "w-0"
              } fixed right-0 top-0 h-screen bg-primary-background-secondary shadow-xl duration-700 ease-in-out`}
            >
              <ul className="mt-28 flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden p-4">
                {HEADER_OPTIONS.map(({ key, word, anchor }) => (
                  <li key={key}>
                    <div className="text-center">
                      <p className="font-mono text-primary-text-primary">
                        {key}
                      </p>
                      <a href={anchor}>
                        <span className="font-mono text-primary-text-navy-light transition-all hover:text-primary-text-primary">
                          {word}
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Fade>
      </header>
      <div
        id="backdrop"
        className={`fixed inset-0 z-10 backdrop-blur-sm ${
          menuOpen ? "visible h-screen w-[30%]" : "invisible h-0 w-0"
        } duration-700 ease-in-out`}
      ></div>
    </>
  );
}
