import { Link } from "react-router-dom";
import "./SecondLevelCategories.css";

const SecondLevelCategories = ({ second, firstLevelName }) => {
  const { categoryName } = second;

  return (
    <li className="second-level-categories">
      <Link
        className="second-level-category-name"
        to={`/itemList/${firstLevelName}/${categoryName}/1`}
        // state={{ categoryName, firstLevelName, pageNow: 1 }}
      >
        {categoryName}
      </Link>
    </li>
  );
};

export default SecondLevelCategories;
