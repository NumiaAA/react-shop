function Search() {
  return (
    <div className="mb-20 d-flex align-center mb-40 justify-between">
      <h1>Все кроссовки</h1>
      <div className="search-block d-flex align-center">
        <img
          className="d-block"
          width={20}
          height={20}
          src="/img/search.svg"
          alt="search"
        />
        <input type="search" placeholder="поиск.." />
      </div>
    </div>
  );
}

export default Search;
