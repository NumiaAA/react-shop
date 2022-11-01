import React from "react";
import axios from "axios";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";

function App(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  /* Берем данные с API и подгружаем их, но только один раз*/
  React.useEffect(() => {
    axios
      .get("https://635fadd8ca0fe3c21aa1c904.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://635fadd8ca0fe3c21aa1c904.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (product) => {
    let isInArray = false;
    cartItems.forEach((el) => {
      if (el.title == product.title) isInArray = true;
    });
    if (!isInArray) {
      axios.post("https://635fadd8ca0fe3c21aa1c904.mockapi.io/cart", product);
      setCartItems((prev) => [...cartItems, product]);
    }
  };

  const onRemoveItem = (id) => {
    // axios.post(`https://635fadd8ca0fe3c21aa1c904.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          onRemove={onRemoveItem}
          searchValue={searchValue}
          items={cartItems}
          closeCart={() => setCartOpened(false)}
        />
      )}
      <Header openCart={() => setCartOpened(true)} />
      <div className="content p-40 ">
        <Search searchValue={searchValue} onChange={onChangeSearchInput} />
        <div className="sneakers d-flex flex-wrap">
          {items
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj) => (
              <Card
                key={obj.title}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => {}}
                onPlus={(item) => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
