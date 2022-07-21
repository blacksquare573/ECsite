import SecondLevelCategories from "./SecondLevelCategories.component";
import "./FirstLevelCategories.css";

const FirstLevelCategories = ({ first }) => {
  const { categoryName, subList } = first;

  return (
    <li className="first-level-categories">
      <div className="first-category-head">{categoryName}</div>
      <div className="second-background">
        <div>{categoryName}</div>
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
