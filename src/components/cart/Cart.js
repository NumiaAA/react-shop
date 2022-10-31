import CardItem from "./cartItem/cartItem";

function Cart(props) {
  return (
    <div style={{ display: "none" }} className="sideBlock">
      <div className="overlay">
        <h2 className="d-flex justify-between">
          Корзина
          <button class="remove-btn cu-p"></button>
        </h2>
        {/* Cart Items */}
        <div className="cartItems">
          {/* Cart Item */}

          <CardItem />

          {/* Cart Price */}

          <div className="cartPrice">
            <ul className="totalBlock mb-30">
              <li className="d-flex justify-between p-10">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
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
