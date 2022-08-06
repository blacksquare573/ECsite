import { Link } from "react-router-dom";
import "./SecondLevelCategories.css";
import { categories } from "./CategoriesMenu";

type secondLevelCategoriesProps = {
  second: categories;
  firstLevelName: string;
};

const SecondLevelCategories = ({
  second,
  firstLevelName,
}: secondLevelCategoriesProps) => {
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
