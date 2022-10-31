import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onFavorite={props.onFavorite}>
        <img width={20} height={20} src="/img/liked.svg" alt="like" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="air force" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-center align-center">
        <div className="d-flex flex-column mr-30">
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <button className="d-block" onPlus={props.onPlus}>
          <img width={10} height={10} src="img/plus.svg" alt="plusCart" />
        </button>
      </div>
    </div>
  );
}

export default Card;
