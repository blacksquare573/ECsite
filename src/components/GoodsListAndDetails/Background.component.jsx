import { Fragment, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import "./Background.styles.css";
import Swiper from "./Swiper.component";
import ChooseCategory from "./ChooseCategory.component";
import ChooseDetail from "./ChooseDetail.component";
import SearchBar from "./SearchBar.component";
import GoodsList from "./GoodsList.component";
import CategoryTitle from "./CategoryTitle.component";
import { createContext } from "react";
import PageChangeBar from "./PageChangeBar.component";

export const detailFilterListContext = createContext();
export const setDetailFilterListContext = createContext();
export const getGoodsListContext = createContext();

const Background = () => {
  // const linkCategoryName = useLocation().state.categoryName;
  // const firstCategoryName = useLocation().state.firstLevelName;
  const categoryLocation = useLocation().state;
  const { categoryName, firstLevelName } = categoryLocation;
  // console.log(categoryLocation);

  const [pageNow, setPageNow] = useState(1);
  const [orderBy, setOrderBy] = useState("selling_price");
  const [goodsList, setGoodsList] = useState([]);
  const [numsOfItems, setNumsOfItems] = useState(0);
  const [subCategoryNameAndNumsOfItems, setSubCategoryNameAndNumsOfItems] =
    useState([]);
  const [goodsDetailsList, setGoodsDetailsList] = useState([]);
  const [detailFilterList, setDetailFilterList] = useState([]);

  console.log(pageNow);

  const getGoodsList = () => {
    // setStateCategoryName(linkCategoryName);
    // console.log(stateCategoryName);
    axios
      .post("http://localhost:8080/itemList", {
        categoryName: categoryName,
        page: pageNow,
        orderBy: orderBy,
        ascOrDesc: "asc",
        cols: detailFilterList,
      })
      .then((response) => {
        setGoodsList(response.data.data.itemListsVOs);
        setNumsOfItems(response.data.data.numsOfItems);
        setSubCategoryNameAndNumsOfItems(
          response.data.data.subCategoryNameAndNumsOfGoods
        );
        setGoodsDetailsList(response.data.data.subCategoryWithGoodsDetailsVos);
      });
  };

  useEffect(getGoodsList, [categoryName, pageNow, orderBy, detailFilterList]);

  return (
    <Fragment>
      <div className="goods-list-body-area">
        <div className="swiper-container">
          <Swiper categoryName={categoryName} firstLevelName={firstLevelName} />
        </div>
        <div className="goods-list-background">
          <div className="background-left">
            <div className="details-bar-container">
              <ChooseCategory
                subCategoryNameAndNumsOfItems={subCategoryNameAndNumsOfItems}
                firstLevelName={firstLevelName}
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
              <SearchBar
                pageNow={pageNow}
                numsOfItems={numsOfItems}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <div className="goods-cards-container">
                <GoodsList goodsList={goodsList} />
              </div>
              <div className="page-change-container">
                <PageChangeBar
                  pageNow={pageNow}
                  setPageNow={setPageNow}
                  numsOfItems={numsOfItems}
                  categoryName={categoryName}
                  firstLevelName={firstLevelName}
                />
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
