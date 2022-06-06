import React, { useEffect, useState } from "react";
import "./Login.css";
import Amazonlogo from "../../Amazon_Logo.png";
import { Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);

  const history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user,history]);

  const signin = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={Amazonlogo} className="login-logo" alt="logo" />
      </Link>
      <div className="login-container">
        <h1>sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-sigin" type="submit" onClick={signin}>
            Sign In
          </button>
        </form>
        <p>
          By Continue you to agree amazon condition of use and privacy notice.
        </p>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/register">
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  );
};

export default Login;
