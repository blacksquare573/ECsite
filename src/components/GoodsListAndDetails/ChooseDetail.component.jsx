const ChooseDetail = () => {
  return (
    <div className="choose-detail-container">
      <h2 className="choose-detail-title">条件で絞り込む</h2>
      <div className="details-choosing-and-clear-container">
        <div>
          <h3 className="details-choosing-title">現在絞り込んでいる条件</h3>
          {/* detailsChoosing.map tag1,tag2,tag3 */}
        </div>
        <button className="details-clear-button">clear button</button>
      </div>
      <div className="details-container">
        {/* details.map */}
        <div className="detail-title">
          <h3>detail name 1</h3>
          tag1~tagN
        </div>
        <div>
          <h3>detail name 2</h3>
          tag1~tagN
        </div>
      </div>
    </div>
  );
};
export default ChooseDetail;
