import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close, github } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6">
          {/* Email, Phone, Website and Social Links */}
          <div className="hidden gap-4 sm:flex items-center">
            <a
              href={`mailto:${config.html.email}`}
              className="text-secondary hover:text-white transition-colors text-sm"
              title="Email"
            >
              {config.html.email}
            </a>
            <span className="text-secondary text-sm">|</span>
            <a
              href={`tel:${config.contact_info?.phone}`}
              className="text-secondary hover:text-white transition-colors text-sm"
              title="Phone"
            >
              {config.contact_info?.phone}
            </a>
            <a
              href={config.contact_info?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              title="Website"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5z" />
              </svg>
            </a>
            <a
              href={config.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              title="GitHub"
            >
              <img src={github} alt="github" className="h-6 w-6 object-contain" />
            </a>
            <a
              href={config.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.615 1.348 3.615 4.253v5.616zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.956-1.704 1.187 0 1.915.753 1.948 1.704 0 .946-.761 1.704-1.989 1.704zm1.581 11.597H3.635V9.859h3.283v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className="border-t border-secondary pt-4">
                  <a
                    href={`mailto:${config.html.email}`}
                    className="text-secondary hover:text-white flex items-center gap-2 text-sm"
                  >
                    ✉️ {config.html.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${config.contact_info?.phone}`}
                    className="text-secondary hover:text-white flex items-center gap-2 text-sm"
                  >
                    📱 {config.contact_info?.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={config.contact_info?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white flex items-center gap-2"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5z" />
                    </svg>
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href={config.social?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white flex items-center gap-2"
                  >
                    <img src={github} alt="github" className="h-5 w-5 object-contain" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={config.social?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white flex items-center gap-2"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.615 1.348 3.615 4.253v5.616zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.956-1.704 1.187 0 1.915.753 1.948 1.704 0 .946-.761 1.704-1.989 1.704zm1.581 11.597H3.635V9.859h3.283v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
