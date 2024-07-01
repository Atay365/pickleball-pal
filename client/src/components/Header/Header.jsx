import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <h2 className="header__title">Pickleball Pal</h2>
        </Link>
      </div>
      <nav className={`nav ${isActive ? "nav--active" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="/courts"
              className="nav__item-link"
              onClick={handleLinkClick}
            >
              Find a Court
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/game"
              className="nav__item-link"
              onClick={handleLinkClick}
            >
              Score Keeper
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/login"
              className="nav__item-link"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/profile"
              className="nav__item-link"
              onClick={handleLinkClick}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
