import React from "react";
import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../../components/checkoutproduct/CheckoutProduct";
import { getBasketTotal } from "../../utils/BasketTotal";
import { useHistory } from "react-router-dom";
import { db } from "../../utils/firebase";
import { Link } from "react-router-dom";

const Payment = () => {
  //user and basket selector
    const { basket, user } = useSelector((state) => state.data);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
            <p>
              House no. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Optio, dicta!
            </p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review item and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket &&
              basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                />
              ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                        <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button >Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
