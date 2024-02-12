import React from "react";
import NavBlock from "../NavBlock/NavBlock.tsx";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Goods4you</div>
      <NavBlock isHeader={false} />
    </footer>
  );
}
