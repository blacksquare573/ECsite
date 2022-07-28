import "./ChooseDetail.styles.css";
import GoodsDetails from "./GoodsDetails.component";

const ChooseDetail = ({
  goodsDetailsList,
  detailFilterList,
  setDetailFilterList,
}) => {
  const clearThisDetail = (detail) => {
    let result = detailFilterList.slice();
    // console.log(detail);
    result.splice(result.indexOf(detail), 1);
    setDetailFilterList(result);
  };

  const clearAllDetails = () => {
    setDetailFilterList([]);
  };

  return (
    <div className="choose-detail-container">
      <h2 className="choose-detail-title">条件で絞り込む</h2>
      <div className="details-choosing-and-clear-container">
        <div>
          <h3 className="details-choosing-title">現在絞り込んでいる条件</h3>
          <ul className="details-choosing-container">
            {detailFilterList.map((detail, index) => {
              return (
                <li key={index}>
                  <button
                    className="details-clear-this-button"
                    onClick={(event) => clearThisDetail(detail)}
                  >
                    {detail} ✕
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="details-clear-button-container">
          <button
            className={
              detailFilterList.length < 1
                ? "details-clear-button"
                : "details-clear-button-active"
            }
            onClick={clearAllDetails}
            disabled={detailFilterList.length < 1}
          >
            全条件をクリア
          </button>
        </div>
      </div>
      <div className="details-containers-area">
        {goodsDetailsList.map((goodsDetails, index) => (
          <GoodsDetails key={index} goodsDetails={goodsDetails} />
        ))}
      </div>
    </div>
  );
};
export default ChooseDetail;
