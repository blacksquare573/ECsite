import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SkuPictures.styles.css";

type SkuPicturesProps = {
  imgList: string[];
};

const SkuPictures = ({ imgList }: SkuPicturesProps) => {
  return (
    <div className="img-swiper-container">
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
              {/* <img src={img} /> */}
              {index}
            </SwiperSlide>
          );
        })}
        <SwiperSlide>10</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SkuPictures;
