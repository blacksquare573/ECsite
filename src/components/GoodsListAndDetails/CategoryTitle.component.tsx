import "./CategoryTitle.styles.css";
type categoryTitleProps = {
  categoryName: string;
};

const CategoryTitle = ({ categoryName }: categoryTitleProps) => {
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
