function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between  align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/sneakers.png" alt="sneakers" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneaker</h3>
            <p className="opacity-5">Магизин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={25} height={25} src="img/cart.svg" alt="sneakers" />
            <span>1205 рублей</span>
          </li>
          <li>
            <img width={25} height={25} src="img/user.svg" alt="sneakers" />
          </li>
        </ul>
      </header>

      <div className="content p-40 ">
        <h1>Все кроссовки</h1>

        <div className="sneakers d-flex flex-wrap">
          <div className="card d-flex flex-column align-center">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="air force"
            />
            <h5>Мужские кроссовки Air Force 1 Mid Suede</h5>
            <div className="d-flex justify-center align-center">
              <div className="d-flex flex-column mr-30">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-block">
                <img width={10} height={10} src="img/plus.svg" alt="plusCart" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column align-center">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="air force"
            />
            <h5>Мужские кроссовки Air Force 1 Mid Suede</h5>
            <div className="d-flex justify-center align-center">
              <div className="d-flex flex-column mr-30">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-block">
                <img width={10} height={10} src="img/plus.svg" alt="plusCart" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column align-center">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="air force"
            />
            <h5>Мужские кроссовки Air Force 1 Mid Suede</h5>
            <div className="d-flex justify-center align-center">
              <div className="d-flex flex-column mr-30">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-block">
                <img width={10} height={10} src="img/plus.svg" alt="plusCart" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column align-center">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="air force"
            />
            <h5>Мужские кроссовки Air Force 1 Mid Suede</h5>
            <div className="d-flex justify-center align-center">
              <div className="d-flex flex-column mr-30">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-block">
                <img width={10} height={10} src="img/plus.svg" alt="plusCart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
