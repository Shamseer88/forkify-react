import "./Header.css";

import logo from "../img/logo.png";
import icons from "../img/icons.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button className="btn search__btn">
          <svg className="search__icon">
            <use href={`${icons}#icon-search`}></use>
          </svg>
          <span>Search</span>
        </button>
      </form>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button class="nav__btn nav__btn--add-recipe">
              <svg className="nav__icon">
                <use href={`${icons}#icon-edit`}></use>
              </svg>
              <span>Add Recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button class="nav__btn nav__btn--bookmarks">
              <svg className="nav__icon">
                <use href={`${icons}#icon-bookmark`}></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <svg>
                      <use href={`${icons}#icon-smile`}></use>
                    </svg>
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
