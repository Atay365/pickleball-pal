import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <h2 className="header__title">Pickleball Pitch</h2>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/courts" className="nav__item-link">
              Find a Court
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/game" className="nav__item-link">
              Score Keeper
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/login" className="nav__item-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
