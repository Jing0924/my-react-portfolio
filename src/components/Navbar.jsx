// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "首頁" },
    { id: "about", label: "關於我" },
    { id: "projects", label: "作品集" },
    { id: "contact", label: "聯絡資訊" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Jing的個人網站</div>

      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection(item.id);
              }}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;