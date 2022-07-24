import { Link } from "react-router-dom";
import "./ChooseCategory.styles.css";

const ChooseCategory = () => {
  return (
    <div className="choose-category-container">
      <h2 className="choose-category-title">カテゴリを選択</h2>
      <div className="subcategories-container">
        <h3>カテゴリ</h3>
        <ul>
          {/* subcategories.map */}
          <li className="subcategory-button">
            {/* <Link to="/next-category1"> */}
            button1
            {/* </Link> */}
          </li>
          <li className="subcategory-button">
            {/* <Link to="/next-category2"> */}
            button2
            {/* </Link> */}
          </li>
          <li className="subcategory-button">
            {/* <Link to="/next-category3"> */}
            button3
            {/* x</Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ChooseCategory;
