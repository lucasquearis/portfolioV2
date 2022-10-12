import { useEffect, useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    var oldScrollY = window.scrollY;
    window.onscroll = function (e) {
      if (oldScrollY < window.scrollY) {
        setMenuOpen(false);
        setTimeout(() => {
          setShowMobileMenu(false);
        }, 400);
      } else {
        setShowMobileMenu(true);
        setMenuOpen(false);
      }
      oldScrollY = window.scrollY;
    };
  }, []);

  useEffect(() => {
    console.log(showMobileMenu);
  }, [showMobileMenu]);

  return (
    <header className={`fixed w-full bg-primary-background `}>
      <nav className="px-6 text-white">
        <div
          className={`${menuOpen ? "iconActive" : ""} ${
            showMobileMenu
              ? "visible h-[112px] overflow-y-auto"
              : "invisible h-0 overflow-y-hidden"
          } flex w-full flex-col items-end duration-500 ease-out`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`hamburger bg-primary-primary before:bg-primary-primary after:bg-primary-primary ${
              menuOpen
                ? "before:top-0 before:rotate-[135deg] after:top-0 after:rotate-[225deg]"
                : ""
            }`}
          />
        </div>
        <div
          className={`${
            menuOpen
              ? "visible h-[112px] overflow-y-auto"
              : "invisible h-0 overflow-y-hidden"
          } flex w-full flex-col items-end duration-500 ease-out`}
        >
          <div className="list">
            <ul className="listItem">
              <li>HOME</li>
              <li>HOME</li>
              <li>HOME</li>
              <li>HOME</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
