import { useContext } from "react";
import "./SubDetail.styles.css";
import {
  detailFilterListContext,
  setDetailFilterListContext,
  getGoodsListContext,
} from "../GoodsListAndDetails/Background.component";

const SubDetail = ({ name, value }) => {
  const detailFilterList = useContext(detailFilterListContext);
  const setDetailFilterList = useContext(setDetailFilterListContext);
  const getGoodsList = useContext(getGoodsListContext);

  const changeFilterListHandler = () => {
    // let result = detailFilterList.slice();
    if (detailFilterList.includes(name)) {
      let index = detailFilterList.indexOf(name);
      detailFilterList.splice(index, 1);
    } else {
      detailFilterList.push(name);
    }
    setDetailFilterList(detailFilterList);
    console.log(detailFilterList);
    // console.log(getGoodsList);
    getGoodsList();
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={detailFilterList.includes(name)}
          onChange={changeFilterListHandler}
        />
        <span className="sub-detail-name">
          {name}（{value}）
        </span>
      </label>
    </li>
  );
};
export default SubDetail;
