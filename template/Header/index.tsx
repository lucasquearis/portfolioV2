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

  useEffect(() => {
    console.log(showMobileMenu);
  }, [showMobileMenu]);

  return (
    <>
      <header className={`fixed w-full bg-primary-background`}>
        <Fade delayMs={300} durationMs={600}>
          <nav className="px-6 text-white">
            <div
              className={`${menuOpen ? "iconActive" : ""} ${
                showMobileMenu
                  ? "visible h-[112px] overflow-auto"
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
              } fixed right-0 top-0 h-screen bg-primary-background duration-700 ease-in-out`}
            >
              <ul className="mt-28 flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden p-4">
                {HEADER_OPTIONS.map(({ key, word }) => (
                  <li key={key}>
                    <div className="text-center">
                      <p className="font-mono text-primary-primary">{key}</p>
                      <p className="font-mono text-primary-secondary-100 transition-all hover:text-primary-primary">
                        {word}
                      </p>
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
        className={`fixed inset-0 z-0 backdrop-blur-sm ${
          menuOpen ? "visible h-screen w-[30%]" : "invisible h-0 w-0"
        } duration-700 ease-in-out`}
      ></div>
    </>
  );
}
