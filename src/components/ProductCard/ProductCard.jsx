import Button from "../Button/Button";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./ProductCard.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
