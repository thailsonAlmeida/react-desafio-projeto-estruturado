import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import "./styles.css";
import { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";
import ButtonInversa from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const navigate = useNavigate();

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação realizada com sucesso!",
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Deseja Excluir?",
  });

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });
 

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleNewProductClick(){
    navigate("/admin/products/create");
  }

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose(){
    setDialogInfoData({...dialogInfoData, visible: false});
  }

  function handleDeleteClick(productId: number){
    setDialogConfirmationData({...dialogConfirmationData, id: productId, visible: true});
  }

  function handleUpdateClick(productId: number){
    navigate(`/admin/products/${productId}`)
  }

  function handleDialogConfirmationAnswer(answer: boolean, productId: number){
    if(answer) {
      productService.deleteById(productId)
        .then(() => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0});
        })
        .catch(err => {
          setDialogInfoData({
            visible: true,
            message: err.response.data.error
          })
        });

    }
    setDialogConfirmationData({...dialogConfirmationData, visible: false});
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div onClick={handleNewProductClick}>
            <ButtonInversa text="Novo" />
          </div>
          
        </div>

        <SearchBar onSearch={handleSearch} />

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={editIcon}
                    alt="Editar"
                    onClick={() => handleUpdateClick(product.id)}
                  />
                </td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={deleteIcon}
                    alt="Deletar"
                    onClick={() => handleDeleteClick(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
      </section>
      {
        dialogConfirmationData.visible &&
        <DialogConfirmation 
            id={dialogConfirmationData.id}
            message={dialogConfirmationData.message} 
            onDialogAnswer={handleDialogConfirmationAnswer} 
        />
      }
      
      {
        dialogInfoData.visible &&
        <DialogInfo 
            message={dialogInfoData.message} 
            onDialogClose={handleDialogInfoClose} 
        />
      }
      
    </main>
  );
}
