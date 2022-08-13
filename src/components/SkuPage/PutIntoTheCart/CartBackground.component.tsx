import { Fragment } from "react";
import "./CartBackground.styles.css";

type cartBackgroundProps = {
  deliveryMethod: string;
  stock: number;
  deliveryTime: string;
  deliveryImg: string;
  price: number;
};

const CartBackground = ({
  deliveryMethod,
  stock,
  deliveryTime,
  deliveryImg,
  price,
}: cartBackgroundProps) => {
  return (
    <Fragment>
      <div className="cart-order-info-container">
        <dl className="cart-order-info">
          <dt>納品方法</dt>
          <dd>{deliveryMethod}</dd>
          <dt>配送目安</dt>
          <dd>
            在庫　{stock}
            <br />
            {deliveryTime}
          </dd>
          <dt>返品・交換</dt>
          <dd>
            14日間返品可能
            <p className="cart-order-help">返品・交換について</p>
          </dd>
          <dt>送料</dt>
          <dd>
            有料<p className="cart-order-help">送料について</p>
          </dd>
        </dl>
        <p className="cart-img-container">
          <img src={deliveryImg} />
        </p>
        <dl className="cart-goods-amount">
          <dt>数量</dt>
          <dd>
            <input id="goods_number" value={1} />
          </dd>
        </dl>
        <div className="price-container">
          <dl className="price">
            <dd className="price-text">
              {price}
              <span>円</span>
            </dd>
          </dl>
        </div>
        <div className="cart-button-container">
          <img src={require("../../../imgs/cart-img.png")} alt="imgs" />
        </div>
      </div>
    </Fragment>
  );
};
export default CartBackground;
