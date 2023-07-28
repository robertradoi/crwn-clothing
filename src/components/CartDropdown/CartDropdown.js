import { useContext } from "react";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
