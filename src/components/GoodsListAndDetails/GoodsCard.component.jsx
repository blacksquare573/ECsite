import "./GoodsCard.styles.css";
const GoodsCard = ({ item }) => {
  const {
    goodsCoverImg,
    goodsName,
    sellingPrice,
    goodsDetailContent,
    colorImgUrlList,
    detailsImgUrlList,
  } = item;

  console.log(colorImgUrlList, detailsImgUrlList);
  return (
    <li>
      <div className="goods-card-container">
        <img src={goodsCoverImg} alt="imgs" width="180px" height="180px" />
        <p className="goods-name">{goodsName}</p>
        <div className="item-info">
          <p className="goods-price">{sellingPrice}円（税込）</p>
          <p className="goods-comment">{goodsDetailContent}</p>
          <div className="goods-colors-container">
            <ul className="goods-colors-list">
              {colorImgUrlList.map((color) => {
                return (
                  <li className="colors-img-container">
                    <img
                      className="colors-img"
                      src={color}
                      alt="imgs"
                      width="20px"
                      height="20px"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="goods-details-container">
            {detailsImgUrlList.map((detail) => {
              return (
                <li className="details-img-container">
                  <img src={detail} alt="imgs" width="41px" height="41px" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default GoodsCard;
