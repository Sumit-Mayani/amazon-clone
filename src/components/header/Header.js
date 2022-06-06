import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/actions";

const Header = () => {

  let dispatch = useDispatch();

  const { user } = useSelector((state) => state.data);

  const handleSignOut = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  }

  return (
    <nav className="header">
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header-logo"
          alt="logo"
        />
      </Link>
      <div className="header-option">
        <LocationOnIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? "/" : "/login"}`} className="header-link">
          <div className="header-option">
            <span className="header-option1">hello, {user ? user.email : "Guest"}{ ""}</span>
            <span className="header-option2" onClick={handleSignOut}>{user ? "Sign Out" : "Sign In" }</span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2">Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Your</span>
            <span className="header-option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartIcon />
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
