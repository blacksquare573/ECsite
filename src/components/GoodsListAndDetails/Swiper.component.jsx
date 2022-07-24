import { Link } from "react-router-dom";
import "./Swiper.styles.css";
const Swiper = () => {
  return (
    <div className="swiper-bar-container">
      <ol className="swiper-bar">
        <li className="swiper-item">
          <Link to="/">ホーム</Link>
        </li>
        {/* categories.map */}
        <li className="swiper-item">
          {/* <Link className="go-back-home" to="/"> */} ⇒ Lv1-categoryName
          {/* </Link> */}
        </li>
        <li className="swiper-item">
          {/* <Link className="go-back-home" to="/"> */} ⇒ Lv2-categoryName
          {/* </Link> */}
        </li>
        <li className="swiper-item">
          {/* <Link className="go-back-home" to="/"> */} ⇒ Lv3-categoryName
          {/* </Link> */}
        </li>
      </ol>
    </div>
  );
};
export default Swiper;
