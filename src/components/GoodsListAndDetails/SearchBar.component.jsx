import "./SearchBar.styles.css";

const SearchBar = ({ numsOfItems, orderBy, setOrderBy }) => {
  const sortBy = (event) => {
    console.log(event.target.value);
    setOrderBy(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <p className="number-of-goods">
        全{numsOfItems}件 1~{numsOfItems}件
      </p>
      <div className="sort-by-container">
        <select value={orderBy} onChange={sortBy} className="sort-by-bar">
          <option value="selling_price">価格の安い順</option>
          <option value="create_time">新着順</option>
        </select>
      </div>
      <dl className="view-control-bar-container">
        <dt>表示切替</dt>
        <dd>icon1</dd>
        <dd>icon2</dd>
      </dl>
    </div>
  );
};
export default SearchBar;
