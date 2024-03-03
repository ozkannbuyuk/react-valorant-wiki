import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import styles from "../../styles/Header.module.css";

const Header = () => {
  const location = useLocation();
  const currentPage = useRef(location.pathname.slice(1));
  const [page, setPage] = useState(currentPage.current);

  useEffect(() => {
    const updateCurrentPage = () => {
      const path =
        location.pathname === "/" ? "home" : location.pathname.slice(1);
      currentPage.current = path;
      setPage(path);
    };

    updateCurrentPage();
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to="/">
          <img src={Logo} alt="logo" className={styles.logo} />
          <h1 className={styles.title}>Valorant Wiki</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              to="/agents"
              className={page === "agents" ? styles.activeNav : styles.navLink}
            >
              Agents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
