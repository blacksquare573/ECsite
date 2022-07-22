import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CategoriesMenu from "../../components/Categories/CategoriesMenu";
const Home = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<CategoriesMenu />} />
      </Routes>
      <Outlet />
    </Fragment>
  );
};
export default Home;
