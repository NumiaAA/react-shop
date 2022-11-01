import React from "react";
import CardItem from "./cartItem/cartItem";

function Cart({ closeCart, items = [], onRemove }) {
  return (
    <div className="sideBlock">
      <div className="overlay">
        <h2 className="d-flex justify-between">
          Корзина
          <button onClick={closeCart} class="remove-btn cu-p"></button>
        </h2>
        <div className="cartItems">
          {items.map((item) => (
            <CardItem
              onRemove={onRemove}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
          <div className="cartPrice">
            <ul className="totalBlock mb-30">
              <li className="d-flex justify-between p-10">
                <span>Итого:</span>
                <div></div>
                <b>12 999 руб.</b>
              </li>
              <li className="d-flex justify-between p-10">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="green__btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
