import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "../Button/Button";
import "./Navbar.css";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Navbar = ({ totalItems }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {"TechShop"} <i class="fas fa-robot" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Sign up</Button>} */}

          {button && (
            <div className="shopping-button">
              <IconButton aria-label="Show cart items">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
