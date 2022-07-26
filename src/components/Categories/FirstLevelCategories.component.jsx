import SecondLevelCategories from "./SecondLevelCategories.component";
import "./FirstLevelCategories.css";
import { Link } from "react-router-dom";

const FirstLevelCategories = ({ first }) => {
  const { categoryName, subList, categoryImg } = first;

  return (
    <li className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        {/*position: absolute*/}
        <div className="second-title">
          <img className="category-img" src={categoryImg} alt="imgs" />
          <Link
            className="second-title-text"
            to="/itemList"
            state={categoryName}
          >
            {categoryName}
          </Link>
        </div>
        <ul className="second-list">
          {subList.map((second) => (
            <SecondLevelCategories key={second.categoryId} second={second} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default FirstLevelCategories;
