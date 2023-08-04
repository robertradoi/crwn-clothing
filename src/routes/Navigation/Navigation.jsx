import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { useSelector } from "react-redux";

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <>
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinks>
        </>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
