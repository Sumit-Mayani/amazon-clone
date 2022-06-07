import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductData";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const SingleProduct = () => {
  let { id } = useParams();

  let dispatch = useDispatch();

  let SingleProduct = products.find((item) => item.id === id);

  const addItemToBasket = () => {
    const item = {
      id:SingleProduct.id,
      title:SingleProduct.title,
      image:SingleProduct.image,
      price:SingleProduct.price,
      rating:SingleProduct.rating,
      specification:SingleProduct.specification,
      detail:SingleProduct.detail
    }
    dispatch(addToCart(item));
  };

  return (
    <div className="single-product-container">
      <img src="" className="single-product-ad" alt="ads" />
      <div className="">
        <div className="single-product">
          <img src={SingleProduct.image} alt="" />
          <div className="single-product-info">
            <div className="single-product-title">{SingleProduct.title}</div>
            <div className="single-product-rating">
              {Array(SingleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
            </div>
            <p className="single-product-price">
              Price: <strong>$</strong>
              <strong>{SingleProduct.price}</strong>
            </p>
            <div className="single-product-specification">
              <h4>Specification</h4>
              {SingleProduct.specification &&
                SingleProduct.specification.map((item, index) => {
                  <li key={index}>{item}</li>;
                })}
            </div>
            <div className="single-product-description">
              <h4>Products Description</h4>
              <p>{SingleProduct.detail}</p>
            </div>
            <button onClick={addItemToBasket}>
              <i>
                <ShoppingCartIcon />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
