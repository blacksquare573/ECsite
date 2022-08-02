import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import "./SkuPage.styles.css";
import Skutitle from "./SkuTitle.component";
import SkuPictures from "./SkuBody/SkuPictures.component";
import SkuSizeAndColor from "./SkuBody/SkuSizeAndColor.component";
import { useState } from "react";
import { useEffect } from "react";
import CartBackground from "./PutIntoTheCart/CartBackground.component";
import Swiper from "../GoodsListAndDetails/Swiper.component";

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
  const [featureIconList, setFeatureIconList] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/sku?goodsId=${goodsId}&size=${size}&color=${color}`
      )
      .then((response) => {
        // console.log(response.data.data);
        setSkuId(response.data.data.skuId);
        setGoodsName(response.data.data.goodsName);
        setSkuName(response.data.data.skuName);
        setSize(response.data.data.size);
        setSizeDetail(response.data.data.sizeDetail);
        setColor(response.data.data.color);
        setCatchcopy(response.data.data.catchcopy);
        setPrice(response.data.data.price);
        setPoint(response.data.data.point);
        setMaterial(response.data.data.material);
        setWeight(response.data.data.weight);
        setWarranty(response.data.data.warranty);
        setDeliveryMethod(response.data.data.deliveryMethod);
        setStock(response.data.data.stock);
        setDeliveryTime(response.data.data.deliveryTime);
        setDeliveryImg(response.data.data.deliveryImg);
        setFeatureIconList(response.data.data.featureIconList);
        setImgList(response.data.data.imgList);
        setSizeList(response.data.data.sizeList);
        setColorList(response.data.data.colorList);
      });
  }, [goodsId, size, color]);

  return (
    <Fragment>
      <div className="sku-body-area">
        <div className="swiper-container">
          <Swiper goodsName={goodsName} />
        </div>
        <div className="sku-title-container">
          <Skutitle skuName={skuName} skuId={skuId} />
        </div>
        <div className="sku-body-container">
          <div className="sku-body-left">
            <div className="sku-body-left-flexbox">
              <div className="pictures-container">
                <SkuPictures imgList={imgList} />
              </div>
              <div className="choose-size-and-color-container">
                <SkuSizeAndColor
                  size={size}
                  setSize={setSize}
                  sizeList={sizeList}
                  colorNow={color}
                  setColor={setColor}
                  colorList={colorList}
                  catchcopy={catchcopy}
                  price={price}
                  point={point}
                  featureIconList={featureIconList}
                  skuId={skuId}
                  sizeDetail={sizeDetail}
                  material={material}
                  weight={weight}
                  warranty={warranty}
                />
              </div>
              <div className="sku-introduction-and-QA-container">
                introduction and QandA
              </div>
            </div>
          </div>
          <div className="sku-body-right">
            <div className="put-into-the-cart-container">
              <div className="cart-units-container">
                <CartBackground
                  deliveryMethod={deliveryMethod}
                  stock={stock}
                  deliveryTime={deliveryTime}
                  deliveryImg={deliveryImg}
                />
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
