import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "../styles/app.scss";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <NavLink className={"navlink"} to={"/home"}>
            Home
          </NavLink>
          <NavLink className={"navlink"} to={"/products"}>
            Products
          </NavLink>
          <NavLink className={"navlink"} to={"/about"}>
            About
          </NavLink>
          <NavLink className={"navlink"} to={"/contact"}>
            Contact
          </NavLink>
        </div>

        <div>
          <Switch>
            <Route path={"/home"} component={Home} />
            <Route path={"/products"} component={Products} />
            <Route path={"/cart"} component={Cart} />
            <Route path={"/about"} component={About} />
            <Route path={"/contact"} component={Contact} />
            {/* <Route path={`/product/${product_id}`} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
