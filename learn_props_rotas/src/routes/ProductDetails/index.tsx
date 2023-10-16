import ButtonInversa from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.css";
import * as produtService from '../../services/product-service';
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export default function ProductDetails() {
  const params = useParams();

  const product = produtService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
          <ProductDetailsCard product={product} />
        }        
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to={'/'}>
            <ButtonInversa text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
