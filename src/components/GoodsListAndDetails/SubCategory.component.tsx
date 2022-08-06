import { Link } from "react-router-dom";
import "./SubCategory.styles.css";

type subCategoryProps = {
  nameAndNums: { categoryName: string; subNumsOfGoods: number };
  firstCategoryName: string;
  secondCategoryName: string;
};

const SubCategory = ({
  nameAndNums,
  firstCategoryName,
  secondCategoryName,
}: subCategoryProps) => {
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
