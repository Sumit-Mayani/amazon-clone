import { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
