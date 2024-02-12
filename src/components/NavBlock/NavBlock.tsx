import React from "react";
import Cart from "../../assets/icons/Cart.svg";
import './NavBlock.css';

type NavBlockProps = {
  isHeader: boolean;
};

export default function NavBlock({ isHeader }: NavBlockProps) {
  return (
    <div className="navBlock">
      <nav className="navBlock__nav">
        <a href="#">Catalog</a>
        <a href="#">About us</a>
        <a href="">Product selection</a>
        <a href="">Our team</a>
        <a href="">Shipping and payment</a>
        <a href="">Contacts</a>
      </nav>
      {isHeader && <div className="navBlock__burger">Burger Menu</div>}

      {isHeader && (
        <div className="navBlock__cart">
          <a href="#" aria-label="Go to Cart" className="navBlock__cart_link">
            Cart
            <div className="navBlock__cart_icon">
              <img src={Cart} alt="cart" />
              <span className="navBlock__cart_text">1</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
