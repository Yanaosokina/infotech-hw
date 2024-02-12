import React from "react";
import NavBlock from "../NavBlock/NavBlock";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">Goods4you</div>
      <NavBlock isHeader={false} />
      </div>
      
    </footer>
  );
}
