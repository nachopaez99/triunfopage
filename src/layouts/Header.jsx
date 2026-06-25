import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/" className="header__logo">
          <img src={assetsData.imagotipoBlanco} alt="" />
        </NavLink>

        <nav className="header__nav">
          {navigationItems.map((item) => (
            <div key={item.id} className="header__nav-item">
              <NavLink to={item.path} className="header__nav-Link">
                {item.label}
              </NavLink>

              {item.dropdown && (
                  <div className="header__dropdown">
                    {item.dropdown.map((link) => (
                      <NavLink key={link.path} to={link.path}>
                        {link.label}
                      </NavLink>
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