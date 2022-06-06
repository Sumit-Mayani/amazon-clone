import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  let dispatch = useDispatch();

  const addToCartItem = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    };
    dispatch(addToCart(item));
  };
  return (
    <div className="product">
      <div className="info">
        <Link to={`/products/${id}`} className="title">
          <p>{title}</p>
        </Link>
      </div>
      <div className="price">
        <strong>$</strong>
        <strong>{price}</strong>
      </div>
      <div className="rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={addToCartItem}>
        <i>
          <ShoppingCartIcon />
        </i>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
