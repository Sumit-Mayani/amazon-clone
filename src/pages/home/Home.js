import React from "react";
import "./Home.css";
import { headerItems, products } from "../../utils/ProductData";
import Banner1 from "../../Bannerimages/Banner1.jpg";
import Banner2 from "../../Bannerimages/Banner2.jpg";
import Banner3 from "../../Bannerimages/Banner3.jpg";
import Banner4 from "../../Bannerimages/Banner4.jpg";
import Banner5 from "../../Bannerimages/Banner5.jpg";
import Banner6 from "../../Bannerimages/Banner6.jpg";
import Slider from "../../components/slider/Slider";
import Product from "../../components/product/Product";
import BackToTop from "../../components/backtotop/BackToTop";

const Home = () => {
    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  return (
    <div>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
            {products.slice(0, 2).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(2, 5).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div className="home-row">
            {products.slice(5,6).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <div style={{ marginTop: "40px" }}><BackToTop/></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
