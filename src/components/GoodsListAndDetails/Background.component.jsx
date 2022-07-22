import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Swiper from "./swiper.component";
import ChooseCategory from "./ChooseCategory.component";
import ChooseDetail from "./ChooseDetail.component";
const Background = () => {
  <Fragment>
    <div className="swiper-container">
      <Swiper />
    </div>

    <div className="background-left">
      <div className="detailsbar-container">
        <ChooseCategory />
        <ChooseDetail />
      </div>
    </div>
    <div className="background-right">
      <div className="goods-list-background">
        <div className="searchbar-container">
          <p>全+件数+件 1~絞り込んだ件数+件</p>
          <select>表示順</select>
          <dl className="view-controlbar-container">
            <dt>表示切替</dt>
            <dd>icon1</dd>
            <dd>icon2</dd>
          </dl>
        </div>
        <div className="goods-cards-container">cards</div>
      </div>
    </div>
    <Outlet />
  </Fragment>;
};

export default Background;
