import "./SecondLevelCategories.css";

const SecondLevelCategories = ({ second }) => {
  const { categoryName } = second;

  return <li className="second-level-categories">{categoryName}</li>;
};

export default SecondLevelCategories;
