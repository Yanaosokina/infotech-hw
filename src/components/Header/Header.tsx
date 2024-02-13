import "./header.css";

import { NavBlock } from "shared-components/NavBlock";

export  function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <div className="header__logo">Goods4you</div>
        <NavBlock isHeader={true} />
      </div>
    </header>
  );
}
