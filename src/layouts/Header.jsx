import { Link } from "react-router-dom";
import { navigationItems } from "../data/navigationData";
import { assetsData } from "../data/assetsData";
import "../styles/layouts/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__phone" href="tel:08103338338">
          ☎ 0810-333-3838
        </a>
      </div>

      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={assetsData.imagotipoBlanco} alt="" />
        </Link>

        <nav className="header__nav">
          {navigationItems.map((item) => (
            <div key={item.id} className="header__nav-item">
              <Link to={item.path} className="header__nav-link">
                {item.label}
              </Link>

              {item.dropdown && (
                  <div className="header__dropdown">
                    {item.dropdown.map((link) => (
                      <Link key={link.path} to={link.path}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;