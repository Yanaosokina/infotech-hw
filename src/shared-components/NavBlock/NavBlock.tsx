import Cart from "assets/icons/Cart.svg";
import './NavBlock.css';

type NavBlockProps = {
  isHeader: boolean;
};

export  function NavBlock({ isHeader }: NavBlockProps) {
  return (
    <div className="nav-block">
      <nav className="nav-block__nav">
        <a href="#">Catalog</a>
        <a href="#">About us</a>
        <a href="#">Product selection</a>
        <a href="#">Our team</a>
        <a href="#">Shipping and payment</a>
        <a href="#">Contacts</a>
      </nav>
      {isHeader && <div className="nav-block__burger">Burger</div>}
      {isHeader && (
        <div className="nav-block__cart">
          <a href="#" aria-label="Go to Cart" className="nav-block__cart_link">
            Cart
            <div className="nav-block__cart_icon">
              <img src={Cart} alt="cart" />
              <span className="nav-block__cart_text">1</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
