import { Link } from "react-router-dom";
const Swiper = () => {
  return (
    <ol className="swiperbar">
      <li>
        <Link className="go-back-home" to="/">
          ホーム
        </Link>
      </li>
      {/* categories.map */}
      <li>
        {/* <Link className="go-back-home" to="/"> */}
        Lv1-categoryName
        {/* </Link> */}
      </li>
      <li>
        {/* <Link className="go-back-home" to="/"> */}
        Lv2-categoryName
        {/* </Link> */}
      </li>
      <li>
        {/* <Link className="go-back-home" to="/"> */}
        Lv3-categoryName
        {/* </Link> */}
      </li>
    </ol>
  );
};
export default Swiper;
