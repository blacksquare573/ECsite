import "./SubDetail.styles.css";

const SubDetail = ({ name, value, detailFilterList, setDetailFilterList }) => {
  return (
    <li>
      <label for="送料無料">
        <input type="checkbox" />
        <span className="sub-detail-name">
          {name}（{value}）
        </span>
      </label>
    </li>
  );
};
export default SubDetail;
