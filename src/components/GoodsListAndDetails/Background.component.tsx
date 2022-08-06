import React, { Fragment, useState, useEffect, createContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";
import "./Background.styles.css";
import Swiper from "./Swiper.component";
import ChooseCategory from "./ChooseCategory.component";
import ChooseDetail from "./ChooseDetail.component";
import SearchBar from "./SearchBar.component";
import GoodsList from "./GoodsList.component";
import CategoryTitle from "./CategoryTitle.component";
import PageChangeBar from "./PageChangeBar.component";

export type itemListsVO = {
  goodsId: number;
  goodsName: string;
  goodsIntro: string;
  goodsCategoryId: number;
  goodsCoverImg: string;
  goodsCarousel: string;
  goodsDetailContent: string;
  originalPrice: number;
  sellingPrice: number;
  stockNum: number;
  tag: string;
  goodsSellStatus: number;
  createUser: number;
  createTime: string;
  updateUser: number;
  updateTime: string;
  colorImgUrlList: string[];
  detailsImgUrlList: string[];
};
export type subCategoryNameAndNumsOfItems = {
  categoryName: string;
  subNumsOfGoods: number;
};
export type goodsDetailsList = {
  name: string;
  subDetailsList: { key: number };
};

export const detailFilterListContext = createContext<string[]>(undefined!);
export const setDetailFilterListContext = createContext<
  React.Dispatch<React.SetStateAction<string[]>>
>(undefined!);
// export const getGoodsListContext = createContext();

const Background = () => {
  const param = useParams();
  const firstCategoryName = param.firstCategoryName!;
  const secondCategoryName = param.secondCategoryName!;
  const categoryName = param.categoryName!;
  const pageNow = param.pageNow ? parseInt(param.pageNow) : 1;
  // console.log(firstCategoryName, secondCategoryName, categoryName, pageNow);

  // const [pageNow, setPageNow] = useState(1);
  const [orderBy, setOrderBy] = useState("selling_price");
  const [goodsList, setGoodsList] = useState<itemListsVO[]>([]);
  const [numsOfItems, setNumsOfItems] = useState(0);
  const [subCategoryNameAndNumsOfItems, setSubCategoryNameAndNumsOfItems] =
    useState<subCategoryNameAndNumsOfItems[]>([]);
  const [goodsDetailsList, setGoodsDetailsList] = useState<goodsDetailsList[]>(
    []
  );
  const [detailFilterList, setDetailFilterList] = useState<string[]>([]);

  // console.log(pageNow);

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
          <Swiper
            categoryName={categoryName}
            firstCategoryName={firstCategoryName}
            secondCategoryName={secondCategoryName}
          />
        </div>
        <div className="goods-list-background">
          <div className="background-left">
            <div className="details-bar-container">
              <ChooseCategory
                subCategoryNameAndNumsOfItems={subCategoryNameAndNumsOfItems}
                firstCategoryName={firstCategoryName}
                categoryName={categoryName}
              />
              <detailFilterListContext.Provider value={detailFilterList}>
                <setDetailFilterListContext.Provider
                  value={setDetailFilterList}
                >
                  {/* <getGoodsListContext.Provider value={getGoodsList}> */}
                  <ChooseDetail
                    goodsDetailsList={goodsDetailsList}
                    detailFilterList={detailFilterList}
                    setDetailFilterList={setDetailFilterList}
                  />
                  {/* </getGoodsListContext.Provider> */}
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
                  numsOfItems={numsOfItems}
                  categoryName={categoryName}
                  firstCategoryName={firstCategoryName}
                  secondCategoryName={secondCategoryName}
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
