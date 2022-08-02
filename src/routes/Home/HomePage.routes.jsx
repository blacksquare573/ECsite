import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
import Background from "../../components/GoodsListAndDetails/Background.component";
import Home from "../../components/Home/Home.component";
import SkuPage from "../../components/SkuPage/SkuPage.component";
const HomePage = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<CategoriesMenu />}>
          <Route index element={<Home />} />
          <Route
            path="itemList/:firstCategoryName/:categoryName/:pageNow"
            element={<Background />}
          />
          <Route
            path="itemList/:firstCategoryName/:secondCategoryName/:categoryName/:pageNow"
            element={<Background />}
          />
          <Route path="sku/:goodsId" element={<SkuPage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};
export default HomePage;
