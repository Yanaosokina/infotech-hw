import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

import "./NavBlock.css";

type NavBlockProps = {
  isHeader: boolean;
};

export function NavBlock({ isHeader }: NavBlockProps) {
  const location = useLocation();
  const isMainPage = matchPath(location.pathname, "/") !== null;
  
  return (
    <div className="nav-block">
      {isMainPage && (
        <nav className="nav-block__nav">
          <a href="#catalog">Catalog</a>
          <a href="#about">About us</a>
          <a href="#products">Product selection</a>
          <a href="#team"> Our team</a>
          <a href="#faq">FAQ</a>
          {isHeader && <Link to="/staff" className="nav-block__staff">For staff</Link>}
        </nav>
      )}
      {isHeader && isMainPage && (
        <div className="nav-block__burger">Burger</div>
      )}
      {!isMainPage && <Link to="/">Back to site</Link>}
    </div>
  );
}
