import { Fragment } from "react";

const Skutitle = ({ skuName, skuCode, goodsReviews }) => {
  return (
    <Fragment>
      <div className="sku-name-container">
        <h1 className="sku-name">sku name</h1>
      </div>
      <div className="sku-code-and-score-container">
        <div className="sku-code-container">
          <p className="sku-code">sku code</p>
        </div>
        <div className="sku-score-container">
          <p className="sku-score">
            <span className="score-stars">平均評価4.1点</span>
            <span className="score-reviews">（97）</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Skutitle;
