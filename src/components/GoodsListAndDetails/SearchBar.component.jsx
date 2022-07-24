import "./SearchBar.styles.css";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <p>全+件数+件 1~絞り込んだ件数+件</p>
      <select>表示順</select>
      <dl className="view-control-bar-container">
        <dt>表示切替</dt>
        <dd>icon1</dd>
        <dd>icon2</dd>
      </dl>
    </div>
  );
};
export default SearchBar;
