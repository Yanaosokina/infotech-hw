import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import { NavBlock } from "shared-components/NavBlock";
import { classNames } from "utils/class-names";

import "./header.css";

export function Header() {
  const location = useLocation();
  const isMainPage = matchPath(location.pathname, "/") !== null;
  const headerClassName = classNames({
    header: true,
    header_mainPage: isMainPage,
  });

  return (
    <header className={headerClassName}>
      <div className="header__block">
        <Link to="/">
          <div className="header__logo">Goods4you</div>
        </Link>

        <NavBlock isHeader={true} />
      </div>
    </header>
  );
}
