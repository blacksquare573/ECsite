import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";

const SkuPictures = ({ imgList }) => {
  return (
    <div className="img-swiper-container">
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
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
      </Swiper>
    </div>
  );
};
export default SkuPictures;
