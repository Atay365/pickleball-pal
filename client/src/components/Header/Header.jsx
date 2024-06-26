import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__link">
          <img src="#" alt="logo" className="header__img" />
        </a>
        <h2 className="header__title">Pickleball Pitch</h2>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="http://" className="nav__item-link">
              Find a Court
            </a>
          </li>
          <li className="nav__item">
            <a href="http://" className="nav__item-link">
              Score Keeper
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
