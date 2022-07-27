import { Link } from "react-router-dom";
import "./SecondLevelCategories.css";

const SecondLevelCategories = ({ second, firstLevelName }) => {
  const { categoryName } = second;

  return (
    <li className="second-level-categories">
      <Link
        className="second-level-category-name"
        to={`/itemList/${categoryName}`}
        state={{ categoryName: categoryName, firstLevelName: firstLevelName }}
      >
        {categoryName}
      </Link>
    </li>
  );
};

export default SecondLevelCategories;
