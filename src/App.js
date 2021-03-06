import React from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
