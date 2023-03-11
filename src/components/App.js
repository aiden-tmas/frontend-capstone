// import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "../styles/app.scss";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import CartProvider from "../context/CartProvider";

export default function App() {
  return (
    <div className={"main-page"}>
      <div className="App">
        <BrowserRouter>
          <CartProvider>
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
              <NavLink className={"navlink"} to={"/cart"}>
                Cart
              </NavLink>
            </div>

            <div>
              <Switch>
                <Route path={"/home"} component={Home} />
                <Route path={"/products"} component={Products} />
                <Route path={"/cart"} component={Cart} />
                <Route path={"/about"} component={About} />
                <Route path={"/contact"} component={Contact} />
                <Route path={`/product/:prod_id`} component={Product} />
                <Route path={"/cart"} component={Cart} />
              </Switch>
            </div>

            <div className="footer">
              <div className="left-column">
                <div className="left-content">
                  <p>Marcdown Company</p>
                  <p>308 Negra Arroyo Lane</p>
                  <p>Albequerque, NM</p>
                </div>
              </div>
              <div className="middle-column">
                <div className="middle-content">
                  <NavLink className={"navlink"} to={"/home"}>
                    Home
                  </NavLink>
                </div>
              </div>
              <div className="right-column">
                <div className="right-content">
                  <p>Aiden Thomas </p>
                  <p>CEO, Founder</p>
                  <p>Marcdown Co</p>
                </div>
              </div>
            </div>
          </CartProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}
