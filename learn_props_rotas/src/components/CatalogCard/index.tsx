import './styles.css';
import computerImage from '../../assets/computer.png';
import { ProductDTO } from '../../models/product';

type Props = {
  product : ProductDTO,
}

export default function CatalogCard({ product } : Props) {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computerImage} alt={product.name} />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}
