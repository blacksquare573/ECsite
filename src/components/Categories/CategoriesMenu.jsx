import FirstLevelCategories from "./FirstLevelCategories.component";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./CategoriesMenu.css";
import { Outlet } from "react-router-dom";

const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/ecGoodsCategories").then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="navigation-bar">
        {/*background*/}
        <div className="category-bar">
          {/*relation:relative*/}
          カテゴリ
        </div>

        <div className="categories-background">
          {/*relation:relative*/}
          <ul className="first-list">
            {categories.map((first) => (
              <FirstLevelCategories key={first.categoryId} first={first} />
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default CategoriesMenu;
