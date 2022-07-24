import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import "./GoodsList.styles.css";
import GoodsCard from "./GoodsCard.component";
const GoodsList = () => {
  const [goodsList, setGoodsList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/itemList", {
        categoryName: "家电",
        page: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) => {
        setGoodsList(response.data.data.itemListsVOs);
      });
  }, []);

  return (
    <Fragment>
      <ul className="goods-list">
        {goodsList.map((item) => (
          <GoodsCard key={item.goodsId} item={item} />
        ))}
      </ul>
    </Fragment>
  );
};
export default GoodsList;
