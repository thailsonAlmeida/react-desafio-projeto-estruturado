import ButtonInversa from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import * as produtService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  const {setContextCartCount} = useContext(ContextCartCount);

  useEffect(() => {
    produtService
      .findById(Number(params.productId))
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          
          <div onClick={handleBuyClick}>
            <ButtonPrimary text="Comprar" />
          </div>

          <Link to={"/"}>
            <ButtonInversa text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
