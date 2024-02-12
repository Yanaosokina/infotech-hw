import React from "react";
import "./header.css";

import NavBlock from "../NavBlock/NavBlock";

export default function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <div className="header__logo">Goods4you</div>
        <NavBlock isHeader={true} />
      </div>
    </header>
  );
}
