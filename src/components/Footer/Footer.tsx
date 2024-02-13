import { NavBlock } from "shared-components/NavBlock";
import "./footer.css";

export  function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">Goods4you</div>
      <NavBlock isHeader={false} />
      </div>
    </footer>
  );
}
