import { Fragment } from "react";
import "./GoodsList.styles.css";
import GoodsCard from "./GoodsCard.component";
import { itemListsVO } from "./Background.component";

type goodsListProps = {
  goodsList: itemListsVO[];
};

const GoodsList = ({ goodsList }: goodsListProps) => {
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
