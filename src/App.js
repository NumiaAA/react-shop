import React from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";

const cardArr = [
  {
    title: "Мужские кроссовки Air Force 1 Mid Suede",
    price: "12 999",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские кроссовки Air Max 720",
    price: "15 333",
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Мужские кроссовки Air Force 1 Mid Suede",
    price: "12 999",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские кроссовки Air Max 720",
    price: "15 333",
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Мужские кроссовки Air Force 1 Mid Suede",
    price: "12 999",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские кроссовки Air Max 720",
    price: "15 333",
    imageUrl: "/img/sneakers/3.jpg",
  },
];

function App(props) {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40 ">
        <Search />
        <div className="sneakers d-flex flex-wrap">
          {cardArr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => {}}
              onPlus={() => {
                console.log(obj);
              }}       />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
