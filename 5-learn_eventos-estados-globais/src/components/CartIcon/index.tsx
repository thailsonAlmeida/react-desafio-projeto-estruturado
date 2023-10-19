import cartImage from "../../assets/cart.svg";
import {useContext} from "react";
import "./styles.css";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {

  const {contextCartCount} = useContext(ContextCartCount);

  return (
    <>
      <img src={cartImage} alt="Carrinho de compras" />
      {
        contextCartCount > 0 &&
        <div className="dsc-cart-count">{contextCartCount}</div>
      }
      
    </>
  );
}
