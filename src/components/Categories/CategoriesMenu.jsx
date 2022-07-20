import FirstLevelCategories from "./FirstLevelCategories.component";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoriesMenu.css";

const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/ecGoodsCategories").then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <div>
      <div className="navigation-bar">
        {/*background*/}
        <div className="first-list-background">
          {/*relation:absolute*/}
          カテゴリ
        </div>

        <div className="categories-border">
          <ul className="first-list">
            {categories.map((first) => (
              <FirstLevelCategories key={first.categoryId} first={first} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
