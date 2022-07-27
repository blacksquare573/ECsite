import { Link } from "react-router-dom";
import "./ChooseCategory.styles.css";
import SubCategory from "./SubCategory.component";

const ChooseCategory = ({ subCategoryNameAndNumsOfItems, firstLevelName }) => {
  return (
    <div className="choose-category-container">
      <h2 className="choose-category-title">カテゴリを選択</h2>
      <div className="subcategories-container">
        <h3 className="category-title">カテゴリ</h3>
        <ul>
          {subCategoryNameAndNumsOfItems.map((nameAndNums, index) => (
            <SubCategory
              key={index}
              nameAndNums={nameAndNums}
              firstLevelName={firstLevelName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ChooseCategory;
