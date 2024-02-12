import React from "react";
import Cart from "../../assets/icons/Cart.svg";
import './NavBlock.css';

type NavBlockProps = {
  isHeader: boolean;
};

export default function NavBlock({ isHeader }: NavBlockProps) {
  return (
    <div className="info">
      <nav className="nav">
        <a href="#">Catalog</a>
        <a href="#">About us</a>
        <a href="">Product selection</a>
        <a href="">Our team</a>
        <a href="">Shipping and payment</a>
        <a href="">Contacts</a>
      </nav>
      {isHeader && <div className="header__burger">Burger</div>}

      {isHeader && (
        <div className="header__cart">
          <a href="#" className="header__cart_link">
            Cart
            <img src={Cart} alt="cart" />
          </a>
        </div>
      )}
    </div>
  );
}
