import { Fragment, useState, useEffect, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import "./SkuPage.styles.css";
import Skutitle from "./SkuTitle.component";
import SkuPictures from "./SkuBody/SkuPictures.component";
import SkuSizeAndColor from "./SkuBody/SkuSizeAndColor.component";
import CartBackground from "./PutIntoTheCart/CartBackground.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SkuQandA from "./SkuBody/SkuQandA.component";
import SkuReview from "./SkuBody/SkuReview.component";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

export type color = {
  color: string;
  colorImg: string;
};

export type QandA = {
  questionId: number;
  question: string;
  answer: string;
  qDate: string;
  aDate: string;
  status: number;
  userId: number;
  goodsId: number;
  likes: number;
  questionCount: number;
};

export type review = {
  reviewId: number;
  goodsId: number;
  skuName: string;
  userId: number;
  userName: string;
  reviewTitle: string;
  reviewMessage: string;
  commentDate: string;
  stars: number;
  likes: number;
  imgList: string[];
};

const SkuPage = () => {
  const param = useParams();
  const goodsId = param.goodsId ? parseInt(param.goodsId) : 0;
  //sku state
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
  const [featureIconList, setFeatureIconList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<string[]>([]);
  const [sizeList, setSizeList] = useState<string[]>([]);
  const [colorList, setColorList] = useState<color[]>([]);
  const [bigImg, setBigImg] = useState("");
  //qa state
  const [QandAList, setQandAList] = useState<QandA[]>([]);
  const [orderBy, setOrderBy] = useState("q_date");
  const [questionPageNum, setQuestionPageNum] = useState(1);
  const questionRef = useRef<HTMLInputElement>(null);
  //review state
  const [reviewList, setReviewList] = useState<review[]>([]);
  const [reviewFold, setReviewFold] = useState(3);
  //review imgs modal state
  const [modalVisibly, setModalVisibly] = useState(false);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [swiperImgList, setSwiperImgList] = useState<string[]>([]);

  const modalOnHandler: (imgList: string[]) => void = (imgList) => {
    console.log(true);
    setModalVisibly(true);
    setSwiperImgList(imgList);
  };
  const modalOffHandler = () => {
    console.log(false);
    setModalVisibly(false);
  };
  const modalStyles = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "500px",
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
  };

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
        setBigImg(response.data.data.imgList[0]!);
      });
  }, [goodsId, size, color]);

  useEffect(() => {
    // console.log(questionPageNum);
    axios
      .get(
        `http://localhost:8080/QandA?goodsId=${goodsId}&orderBy=${orderBy}&pageNum=${questionPageNum}`
      )
      .then((response) => {
        setQandAList(response.data.data);
      });
  }, [goodsId, orderBy, questionPageNum]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/review?goodsId=${goodsId}`)
      .then((response) => {
        setReviewList(response.data.data);
      });
  }, [goodsId]);

  return (
    <Fragment>
      <div className="sku-body-area">
        <div className="swiper-container">
          {/* <Swiper goodsName={goodsName} /> */}
        </div>
        <div className="sku-title-container">
          <Skutitle skuName={skuName} skuId={skuId} />
        </div>
        <div className="sku-body-container">
          <div className="sku-body-left">
            <div className="sku-body-left-flexbox">
              <div className="pictures-container">
                <SkuPictures
                  imgList={imgList}
                  bigImg={bigImg}
                  setBigImg={setBigImg}
                />
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
                <div className="sku-introduction-container"></div>
                <div className="sku-QA-review-container">
                  <SkuQandA
                    goodsId={goodsId}
                    QandAList={QandAList}
                    setQandAList={setQandAList}
                    setOrderBy={setOrderBy}
                    questionPageNum={questionPageNum}
                    setQuestionPageNum={setQuestionPageNum}
                    questionRef={questionRef}
                  />
                  <SkuReview
                    reviewList={reviewList}
                    reviewFold={reviewFold}
                    setReviewFold={setReviewFold}
                    modalOnHandler={modalOnHandler}
                  />
                </div>
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
                  price={price}
                />
              </div>
              <ul className="sns-buttons-container">snsbuttons</ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalVisibly}
        onClose={modalOffHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: mainSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {swiperImgList.map((img) => {
              return (
                <SwiperSlide>
                  <img src={img} style={{ marginBottom: "10px" }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={(event) => setMainSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {swiperImgList.map((img) => {
              return (
                <SwiperSlide>
                  <img src={img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Modal>
      <Outlet />
    </Fragment>
  );
};

export default SkuPage;
