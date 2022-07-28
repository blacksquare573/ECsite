import { Link } from "react-router-dom";
import "./Swiper.styles.css";

const Swiper = ({ categoryName, firstCategoryName, secondCategoryName }) => {
  return (
    <div className="swiper-bar-container">
      <ol className="swiper-bar">
        <li className="swiper-item">
          <Link to="/">ホーム</Link>
        </li>
        <li className="swiper-item">⇒ {firstCategoryName}</li>
        {secondCategoryName && (
          <li className="swiper-item">
            <Link to={`/itemList/${firstCategoryName}/${secondCategoryName}/1`}>
              ⇒ {secondCategoryName}
            </Link>
          </li>
        )}
        <li className="swiper-item">⇒ {categoryName}</li>
      </ol>
    </div>
  );
};
export default Swiper;
