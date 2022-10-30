
function Card(props) {
  return (
    <div className="card d-flex flex-column align-center">
      <div className="favorite">
        <img width={20} height={20} src="/img/liked.svg" alt="like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="air force" />
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
  );
}

export default Card;
