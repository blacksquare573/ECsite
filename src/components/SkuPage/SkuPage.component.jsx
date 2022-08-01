import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import "./SkuPage.styles.css";
import Skutitle from "./SkuTitle.component";
import SkuPictures from "./SkuBody/SkuPictures.component";
import SkuSizeAndColor from "./SkuBody/SkuSizeAndColor.component";
import { useState } from "react";

const SkuPage = () => {
  const param = useParams();
  const goodsId = param.goodsId;

  const [skuId, setSkuId] = useState(0);
  const [goodsName, setGoodsName] = useState("");
  const [skuName, setSkuName] = useState("");
  const [size, setSize] = useState("");
  const [sizeDetail, setSizeDetail] = useState("");
  const [color, setColor] = useState("");
  const [catchcopy, setCatchcopy] = useState("");
  const [price, setPrice] = useState(0);
  const [point, setPoint] = useState(0);
  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [warranty, setWarranty] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [stock, setStock] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryImg, setDeliveryImg] = useState("");
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [imgList, setImgList] = useState({});

  return (
    <Fragment>
      <div className="sku-body-area">
        <div className="swiper-container">swiper component</div>
        <div className="sku-title-container">
          <Skutitle />
        </div>
        <div className="sku-body-container">
          <div className="sku-body-left">
            <div className="sku-body-left-flexbox">
              <div className="pictures-container">
                <SkuPictures />
              </div>
              <div className="choose-size-and-color-container">
                <SkuSizeAndColor />
              </div>
              <div className="sku-introduction-and-QA-container">
                introduction and QandA
              </div>
            </div>
          </div>
          <div className="sku-body-right">
            <div className="put-into-the-cart-container">
              <div className="cart-units-container">
                put your goods into the cart
              </div>
              <ul className="sns-buttons-container">snsbuttons</ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default SkuPage;
