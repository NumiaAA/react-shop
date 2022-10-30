import React from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="wrapper clear">
      {/* Side */}
      <Cart />
      <Header />
      <div className="content p-40 ">
        <Search />
        <div className="sneakers d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
