function CardItem(props) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <img width={100} height={100} src={props.imageUrl} alt="Sneakers" />
      <div className="cartItem__text m-30">
        <p>{props.title}</p>
        <b>{props.price} руб.</b>
      </div>
      <button class="remove-btn"></button>
    </div>
  );
}

export default CardItem;
