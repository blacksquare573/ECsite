import "./SearchBar.styles.css";

const SearchBar = ({ numsOfItems }) => {
  return (
    <div className="search-bar-container">
      <p className="number-of-goods">全{numsOfItems}件 1~10件</p>
      <div className="sort-by-container">
        <select className="sort-by-bar">
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
