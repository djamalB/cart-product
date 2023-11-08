import BtnDelete from "../BtnDelete";
import Count from "../Count";
import "./style.scss";

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;

  const priceformatter = new Intl.NumberFormat();
  return (
    <>
      {" "}
      <section className="product">
        <div className="product__img">
          <img src={`./img/products/${img}`} alt={product.title} />
        </div>
        <div className="product__title">{title}</div>
        <div className="product__count">
          <Count
            count={count}
            increase={increase}
            decrease={decrease}
            id={id}
            changeValue={changeValue}
          />
        </div>
        <div className="product__price">{priceformatter.format(priceTotal)} руб.</div>
        <div className="product__controls">
          <BtnDelete deleteProduct={deleteProduct} id={id} />
        </div>
      </section>
    </>
  );
};

export default Product;
