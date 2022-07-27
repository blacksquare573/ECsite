import { Fragment } from "react";
import "./GoodsList.styles.css";
import GoodsCard from "./GoodsCard.component";

const GoodsList = ({ goodsList }) => {
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
