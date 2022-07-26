import { Link } from "react-router-dom";
import "./SecondLevelCategories.css";

const SecondLevelCategories = ({ second }) => {
  const { categoryName } = second;

  return (
    <li className="second-level-categories">
      <Link
        className="second-level-category-name"
        to="/itemList"
        state={categoryName}
      >
        {categoryName}
      </Link>
    </li>
  );
};

export default SecondLevelCategories;
