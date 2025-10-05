import React from "react";

const NAV_ITEMS = ["HOME",
    "ABOUT",
    "EDUCATION",
    "EXPERIENCE",
    "PROJECTS",
    "CONTACT",];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="nav-bar">
        <ul className="nav-list">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item}>
              <button
                className={`nav-btn ${idx === 0 ? "active" : ""}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
