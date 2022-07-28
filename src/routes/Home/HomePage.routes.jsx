import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
import Background from "../../components/GoodsListAndDetails/Background.component";
import Home from "../../components/Home/Home.component";
const HomePage = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<CategoriesMenu />}>
          <Route index element={<Home />} />
          {/* <Route path="itemList" element={<Background />} /> */}
          {/* <Route path="itemList/:categoryName" element={<Background />} /> */}
          <Route
            path="itemList/:firstCategoryName/:categoryName/:pageNow"
            element={<Background />}
          />
          <Route
            path="itemList/:firstCategoryName/:secondCategoryName/:categoryName/:pageNow"
            element={<Background />}
          />
          {/* <Route path="itemList/:categoryName/:pageNow" element={<Background />} /> */}
        </Route>
      </Routes>
    </Fragment>
  );
};
export default HomePage;
