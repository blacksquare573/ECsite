import { useContext } from "react";
import "./SubDetail.styles.css";
import {
  detailFilterListContext,
  setDetailFilterListContext,
  // getGoodsListContext,
} from "./Background.component";

type subDetailProps = {
  name: string;
  value: number;
};

const SubDetail = ({ name, value }: subDetailProps) => {
  const detailFilterList = useContext(detailFilterListContext);
  const setDetailFilterList = useContext(setDetailFilterListContext);
  // const getGoodsList = useContext(getGoodsListContext);

  const changeFilterListHandler = () => {
    let result = detailFilterList.slice();
    if (result.includes(name)) {
      let index = result.indexOf(name);
      result.splice(index, 1);
    } else {
      result.push(name);
    }
    setDetailFilterList(result);
    // console.log(detailFilterList);
    // console.log(getGoodsList);
    // getGoodsList();
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
