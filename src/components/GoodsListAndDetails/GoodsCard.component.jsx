import "./GoodsCard.styles.css";
const GoodsCard = ({ item }) => {
  const {
    goodsCoverImg,
    goodsName,
    sellingPrice,
    goodsDetailContent,
    goodsIntro,
  } = item;
  return (
    <li>
      <div className="goods-card-container">
        <img src={goodsCoverImg} alt="imgs" />
        <p className="goods-name">{goodsName}</p>
        <div className="item-info">
          <p className="goods-price">{sellingPrice}円（税込）</p>
          <p className="goods-comment">{goodsDetailContent}</p>
          <p className="goods-intro">{goodsIntro}</p>
        </div>
      </div>
    </li>
  );
};
export default GoodsCard;
