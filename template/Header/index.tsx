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
        className={`bg-[rgba(10, 25, 47, 0.85)] fixed z-20 w-full shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] backdrop-blur-sm`}
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
              <h1 className="overflow-hidden text-5xl text-primary-primary shadow">
                L
              </h1>
              <button
                className={`hamburger bg-primary-primary before:bg-primary-primary after:bg-primary-primary ${
                  menuOpen
                    ? "bg-transparent shadow-none before:top-0 before:rotate-[135deg] after:top-0 after:rotate-[225deg]"
                    : ""
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            <div
              className={`${
                menuOpen ? "w-[70%]" : "w-0"
              } fixed right-0 top-0 h-screen bg-[#112240] shadow-xl duration-700 ease-in-out`}
            >
              <ul className="mt-28 flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden p-4">
                {HEADER_OPTIONS.map(({ key, word, anchor }) => (
                  <li key={key}>
                    <div className="text-center">
                      <p className="font-mono text-primary-primary">{key}</p>
                      <a href={anchor}>
                        <span className="font-mono text-primary-secondary-100 transition-all hover:text-primary-primary">
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
