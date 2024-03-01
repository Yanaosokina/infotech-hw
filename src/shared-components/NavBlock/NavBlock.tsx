import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import BurgerSVG from '../../assets/icons/burger-icon.svg';

import "./NavBlock.css";
import { useState } from "react";

type NavBlockProps = {
  isHeader: boolean;
};

export function NavBlock({ isHeader }: NavBlockProps) {
  const location = useLocation();
  const isMainPage = matchPath(location.pathname, "/") !== null;
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="nav-block">
      {isMainPage && (
        <nav className="nav-block__nav">
          <a href="#catalog">Catalog</a>
          <a href="#about">About us</a>
          <a href="#products">Product selection</a>
          <a href="#team"> Our team</a>
          <a href="#faq">FAQ</a>
          {isHeader && (
            <Link to="/staff" className="nav-block__staff">
              For staff
            </Link>
          )}
        </nav>
      )}
      {isHeader && isMainPage && (
        <div className="nav-block__burger" onClick={toggleDropdown}>
          <img src={BurgerSVG} alt="Burger"  width={20} height={20} className="nav-block__burger_img"/>
          {showDropdown && (
            <div className="nav-block__dropdown">
              <a href="#catalog">Catalog</a>
              <a href="#about">About us</a>
              <a href="#products">Product selection</a>
              <a href="#team"> Our team</a>
              <a href="#faq">FAQ</a>{" "}
            </div>
          )}
        </div>
      )}
      {!isMainPage && <Link to="/">Back to site</Link>}
    </div>
  );
}
