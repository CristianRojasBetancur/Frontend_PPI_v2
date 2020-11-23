import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import Layout from "./Layout";
import Carrito from "./pages/Carrito";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" render={() => <Home App={this} />} />
            <Route path="/inicio" exact render={() => <Home App={this} />} />
            <Route
              path="/productos"
              exact
              render={() => <Productos App={this} />}
            />
            <Route
              path="/carrito"
              exact
              render={() => <Carrito App={this} />}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}
