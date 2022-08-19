import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SkuPictures.styles.css";
// import { useState } from "react";

type SkuPicturesProps = {
  imgList: string[];
  bigImg: string;
  setBigImg: React.Dispatch<React.SetStateAction<string>>;
};

const SkuPictures = ({ imgList, bigImg, setBigImg }: SkuPicturesProps) => {
  // console.log(bigImg);

  const changeBigImgHandler: (img: string) => void = (img) => {
    setBigImg(img);
  };

  return (
    <div className="img-container">
      <div className="big-img-container">
        <img src={bigImg} />
      </div>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation, Pagination]}
        className="mySwiper"
      >
        {imgList.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                onClick={(event) => {
                  changeBigImgHandler(img);
                }}
              />
              {/* {index} */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default SkuPictures;
