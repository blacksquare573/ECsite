import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
import Background from "../../components/GoodsListAndDetails/Background.component";
const Home = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<CategoriesMenu />}>
          <Route path="itemList" element={<Background />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
export default Home;
