import React from "react";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "../../components/checkoutproduct/CheckoutProduct";
import SubTotal from "../../components/subtotal/SubTotal";

const Checkout = () => {
  //user and basket
  const { user, basket } = useSelector((state) => state.data);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src="" alt="" className="checkout-ad" />
        <div>
          <h3>hello, {user?.email}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shopping Basket is Empty"
              : "Your Shopping Basket"}
          </h2>
          {basket && basket.map((item) => (
            <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal/>
      </div>
    </div>
  );
};

export default Checkout;
