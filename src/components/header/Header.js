
function Header() {
  return (
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
  );
}

export default Header;
