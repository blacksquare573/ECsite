import { Link } from "react-router-dom";
import "./SubCategory.styles.css";

const SubCategory = ({
  nameAndNums,
  firstCategoryName,
  secondCategoryName,
}) => {
  const { categoryName, subNumsOfGoods } = nameAndNums;
  return (
    <li className="subcategory-button">
      <Link
        className="subcategory-link"
        to={`/itemList/${firstCategoryName}/${secondCategoryName}/${categoryName}/1`}
      >
        <span className="subcategory-name-and-nums">
          {categoryName}（{subNumsOfGoods}）
        </span>
      </Link>
    </li>
  );
};

export default SubCategory;
