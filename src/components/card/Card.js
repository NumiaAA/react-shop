import React from "react";
import styles from "./Card.module.scss";

function Card({ onFavorite, title, price, imageUrl,  onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const likeAdd = () => {
    setLike(!like);
  };

  const addCart = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {}, [isAdded]);
  React.useEffect(() => {}, [like]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onFavorite={onFavorite}>
        <img
          onClick={likeAdd}
          width={25}
          height={25}
          src={like ? "/img/like-active.svg" : "/img/liked.svg"}
          alt="like"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="air force" />
      <h5>{title}</h5>
      <div className="d-flex justify-center align-center">
        <div className="d-flex flex-column mr-30">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={addCart}
          width={30}
          height={30}
          src={isAdded ? "/img/btn-active.svg" : "/img/plus.svg"}
          alt="plusCart"
        />
      </div>
    </div>
  );
}

export default Card;
