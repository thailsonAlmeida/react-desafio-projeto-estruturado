import './styles.css';
import ButtonInversa from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails(){
    return(
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
              <ProductDetailsCard />
            <div className="dsc-btn-page-container">      
              <ButtonPrimary />      
              <ButtonInversa />
            </div>
          </section>
        </main>
      </>
    );
}