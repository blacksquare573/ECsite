import RecommendGoodsCards from "./RecommendGoodsCards.component";
import axios from "axios";
import { useEffect, useState } from "react";
import "./RecommendGoods.css";

const RecommendGoods = () => {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/ecGoodsDetail?configType=4")
      .then((response) => {
        // console.log(response.data.data);
        setRec(response.data.data);
      });
  }, []);

  return (
    <div className="recommend">
      <h1>おすすめ商品</h1>
      <ul className="goods">
        {rec.map((goodsInfo) => (
          <RecommendGoodsCards key={goodsInfo.goodsId} goodsInfo={goodsInfo} />
        ))}
      </ul>
    </div>
  );
};
export default RecommendGoods;
