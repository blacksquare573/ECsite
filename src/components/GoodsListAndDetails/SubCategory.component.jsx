import { Link } from "react-router-dom";

const SubCategory = ({ nameAndNums }) => {
  const { categoryName, subNumsOfGoods } = nameAndNums;
  return (
    <li className="subcategory-button">
      {categoryName}（{subNumsOfGoods}）
      {/* <Link to="/next-category1">button1</Link> */}
    </li>
  );
};

export default SubCategory;
