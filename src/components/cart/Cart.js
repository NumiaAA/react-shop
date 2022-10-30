function Cart() {
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

          <div className="cartItem d-flex align-center mb-20">
            <img
              width={100}
              height={100}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cartItem__text m-30">
              <p>Мужские кроссовки Air Force 1 Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button class="remove-btn"></button>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img
              width={100}
              height={100}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cartItem__text m-30">
              <p>Мужские кроссовки Air Force 1 Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button class="remove-btn"></button>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img
              width={100}
              height={100}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cartItem__text m-30">
              <p>Мужские кроссовки Air Force 1 Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button class="remove-btn"></button>
          </div>
        </div>

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
  );
}

export default Cart;
