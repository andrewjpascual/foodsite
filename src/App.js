import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import pages & components
import Home from "../src/pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
