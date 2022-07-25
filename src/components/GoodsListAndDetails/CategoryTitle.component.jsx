import "./CategoryTitle.styles.css";
const CategoryTitle = ({ categoryName }) => {
  return (
    <div className="category-main-title-container">
      <h1 className="category-main-title">{categoryName}</h1>
      <p className="category-introduction">introduce-text</p>
      {/* <Link className="category-suggestion" to="/categorySuggestion"> */}
      {/* <p>{categoryName}の選び方</p> */}
      {/* </Link> */}
    </div>
  );
};
export default CategoryTitle;
