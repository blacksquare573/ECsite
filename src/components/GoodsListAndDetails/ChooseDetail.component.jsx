import axios from "axios";
import { useState, useEffect } from "react";
import "./ChooseDetail.styles.css";
const ChooseDetail = () => {
  const [details, setDetails] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/itemList", {
        categoryName: "家电",
        page: 1,
        orderBy: "selling_price",
        ascOrDesc: "asc",
      })
      .then((response) => {
        console.log(response.data.data);
      });
  }, []);

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
      <div className="details-container">{/* details.map */}</div>
    </div>
  );
};
export default ChooseDetail;
