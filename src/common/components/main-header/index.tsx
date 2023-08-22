import React, { useState } from "react";
import classes from "../../../../styles/header.module.scss";
import Link from "next/link";

interface NAV_ITEM {
  id: number;
  name: string;
  url: string;
}

const navItems: NAV_ITEM[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 6, name: "Blogs", url: "/blogs" },
  { id: 3, name: "Portfolio", url: "/portfolio" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Contact Us", url: "/contact-us" },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<NAV_ITEM>(navItems[0]);

  return (
    <header>
      <nav
        className={`${classes.navCustome} navbar navbar-expand-lg sticky-top`}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a className="navbar-brand text-white" href="#">
              Bilalisz-logo
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {navItems.map((item) => (
                  <li className={`nav-item item`} key={item.id}>
                    <Link
                      href={item.url}
                      className="nav-link text-white"
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
