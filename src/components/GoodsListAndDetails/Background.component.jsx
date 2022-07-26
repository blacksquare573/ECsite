import { Fragment, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import "./Background.styles.css";
import Swiper from "./Swiper.component";
import ChooseCategory from "./ChooseCategory.component";
import ChooseDetail from "./ChooseDetail.component";
import SearchBar from "./SearchBar.component";
import GoodsList from "./GoodsList.component";
import CategoryTitle from "./CategoryTitle.component";
import { createContext } from "react";

export const detailFilterListContext = createContext();
export const setDetailFilterListContext = createContext();
export const getGoodsListContext = createContext();

const Background = () => {
  const [categoryName, setCategoryName] = useState("");
  const [goodsList, setGoodsList] = useState([]);
  const [numsOfItems, setNumsOfItems] = useState(0);
  const [subCategoryNameAndNumsOfItems, setSubCategoryNameAndNumsOfItems] =
    useState([]);
  const [goodsDetailsList, setGoodsDetailsList] = useState([]);
  const [detailFilterList, setDetailFilterList] = useState([]);

  const getGoodsList = () => {
    axios
      .post("http://localhost:8080/itemList", {
        categoryName: "家电",
        page: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
        cols: detailFilterList,
      })
      .then((response) => {
        setCategoryName(response.data.data.categoryName);
        setGoodsList(response.data.data.itemListsVOs);
        setNumsOfItems(response.data.data.numsOfItems);
        setSubCategoryNameAndNumsOfItems(
          response.data.data.subCategoryNameAndNumsOfGoods
        );
        setGoodsDetailsList(response.data.data.subCategoryWithGoodsDetailsVos);
      });
  };

  useEffect(getGoodsList, []);

  return (
    <Fragment>
      <div className="goods-list-body-area">
        <div className="swiper-container">
          <Swiper categoryName={categoryName} />
        </div>
        <div className="goods-list-background">
          <div className="background-left">
            <div className="details-bar-container">
              <ChooseCategory
                subCategoryNameAndNumsOfItems={subCategoryNameAndNumsOfItems}
              />
              <detailFilterListContext.Provider value={detailFilterList}>
                <setDetailFilterListContext.Provider
                  value={setDetailFilterList}
                >
                  <getGoodsListContext.Provider value={getGoodsList}>
                    <ChooseDetail goodsDetailsList={goodsDetailsList} />
                  </getGoodsListContext.Provider>
                </setDetailFilterListContext.Provider>
              </detailFilterListContext.Provider>
            </div>
          </div>
          <div className="background-right">
            <CategoryTitle categoryName={categoryName} />
            <div className="goods-list-container">
              <SearchBar numsOfItems={numsOfItems} />
              <div className="goods-cards-container">
                <GoodsList goodsList={goodsList} />
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
