import ButtonInversa from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import "./styles.css";


const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim   ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2598.69,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInversa text="Listar" />
        </div>
      </section>
    </main>
  );
}
