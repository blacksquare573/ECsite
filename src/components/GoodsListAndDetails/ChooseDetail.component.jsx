import "./ChooseDetail.styles.css";
import GoodsDetails from "./GoodsDetails.component";

const ChooseDetail = ({
  goodsDetailsList,
  detailFilterList,
  setDetailFilterList,
}) => {
  return (
    <div className="choose-detail-container">
      <h2 className="choose-detail-title">条件で絞り込む</h2>
      <div className="details-choosing-and-clear-container">
        <div>
          <h3 className="details-choosing-title">現在絞り込んでいる条件</h3>
          {/* detailsChoosing.map tag1,tag2,tag3 */}
        </div>
        <div className="details-clear-button-container">
          <button className="details-clear-button">全条件をクリア</button>
        </div>
      </div>
      <div className="details-containers-area">
        {goodsDetailsList.map((goodsDetails, index) => (
          <GoodsDetails
            key={index}
            goodsDetails={goodsDetails}
            detailFilterList={detailFilterList}
            setDetailFilterList={setDetailFilterList}
          />
        ))}
      </div>
    </div>
  );
};
export default ChooseDetail;
