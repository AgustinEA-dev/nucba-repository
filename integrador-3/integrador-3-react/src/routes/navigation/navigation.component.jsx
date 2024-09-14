import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BarsLogo } from "../../assets/bars-solid.svg";
import { ReactComponent as CartLogo } from "../../assets/cart-shopping-solid.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          <Link className="logo" to={"/"}>
            <span>LOGO</span>
          </Link>
          <nav className="links-container">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="icons-container">
          <BarsLogo className="bars-icon" />
          <CartLogo className="cart-icon" />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
