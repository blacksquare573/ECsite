import "./GoodsDetails.styles.css";
import SubDetail from "./SubDetail.component";
import { goodsDetailsList } from "./Background.component";

type goodsDetailsProps = {
  goodsDetails: goodsDetailsList;
};

const GoodsDetails = ({ goodsDetails }: goodsDetailsProps) => {
  const { name, subDetailsList } = goodsDetails;
  // console.log(
  //   Object.entries(subDetailsList).map(
  //     ([key, value]) => `My key is ${key} and my value is ${value}`
  //   )
  // );
  return (
    <div className="details-container">
      <h3 className="details-title">{name}</h3>
      <div className="sub-details-container">
        <ul className="sub-details">
          {Object.entries(subDetailsList).map(([key, value], index) => (
            <SubDetail key={index} name={key} value={value} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default GoodsDetails;
