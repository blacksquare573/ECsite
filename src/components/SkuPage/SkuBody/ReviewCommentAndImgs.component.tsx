import { review } from "../SkuPage.component";
import Rating from "@mui/material/Rating";
import "./ReviewCommentAndImgs.styles.css";

type reviewCommentAndImgsProps = {
  review: review;
  index: number;
  reviewFold: number;
  modalOnHandler: (imgList: string[]) => void;
};

const ReviewCommentAndImgs = ({
  review,
  index,
  reviewFold,
  modalOnHandler,
}: reviewCommentAndImgsProps) => {
  return (
    <li
      className="review-list"
      style={{
        display: index >= reviewFold ? "none" : "list-item",
      }}
    >
      <div className="stars-and-username-container">
        <Rating name="read-only" value={review.stars} size="small" readOnly />
        <p className="review-username">
          <b>{review.userName}</b>さん &emsp; {review.commentDate}
        </p>
      </div>
      <p className="review-sku-name">購入商品：{review.skuName}</p>
      <p className="review-title">{review.reviewTitle}</p>
      <p>{review.reviewMessage}</p>
      <ul className="review-img-list">
        {review.imgList.map((img, index) => {
          return (
            <li key={index} className="review-img-container">
              <img
                src={img}
                onClick={(event) => modalOnHandler(review.imgList)}
              />
            </li>
          );
        })}
      </ul>
      <p className="review-likes">参考になった（{review.likes}人）</p>
    </li>
  );
};
export default ReviewCommentAndImgs;
