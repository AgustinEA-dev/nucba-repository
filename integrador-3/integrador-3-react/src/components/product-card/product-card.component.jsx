import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img className="product-card-img" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name-price-container">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
