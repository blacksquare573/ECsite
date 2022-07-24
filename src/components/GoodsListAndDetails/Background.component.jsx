import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Background.styles.css";
import Swiper from "./Swiper.component";
import ChooseCategory from "./ChooseCategory.component";
import ChooseDetail from "./ChooseDetail.component";
import SearchBar from "./SearchBar.component";
import GoodsList from "./GoodsList.component";

const Background = () => {
  return (
    <Fragment>
      <div className="goods-list-body-area">
        <div className="swiper-container">
          <Swiper />
        </div>
        <div className="goods-list-background">
          <div className="background-left">
            <div className="details-bar-container">
              <ChooseCategory />
              <ChooseDetail />
            </div>
          </div>
          <div className="background-right">
            <div className="goods-list-container">
              <SearchBar />
              <div className="goods-cards-container">
                <GoodsList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Background;
