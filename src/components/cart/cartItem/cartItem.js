function CardItem({ title, price, imageUrl, id, onRemove }) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <img width={100} height={100} src={imageUrl} alt="Sneakers" />
      <div className="cartItem__text m-30">
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <button onClick={() => onRemove(id)} class="remove-btn"></button>
    </div>
  );
}

export default CardItem;
