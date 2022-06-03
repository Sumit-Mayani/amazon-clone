import "./App.css";
import Home from "./pages/home/Home";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
