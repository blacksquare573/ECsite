import { review } from "../SkuPage.component";
import Rating from "@mui/material/Rating";
import "./SkuReview.styles.css";
import { display } from "@mui/system";
import ReviewCommentAndImgs from "./ReviewCommentAndImgs.component";

type skuReviewProps = {
  reviewList: review[];
  reviewFold: number;
  setReviewFold: React.Dispatch<React.SetStateAction<number>>;
  modalOnHandler: (imgList: string[]) => void;
};

const SkuReview = ({
  reviewList,
  reviewFold,
  setReviewFold,
  modalOnHandler,
}: skuReviewProps) => {
  let averageScore = 0;
  let starsList = [0, 0, 0, 0, 0];
  for (var i = 0; i < reviewList.length; i++) {
    averageScore += reviewList[i].stars / reviewList.length;
    //取各星数的评价数
    starsList[reviewList[i].stars - 1]++;
  }
  //取评价的平均数
  averageScore = Math.round(averageScore * 10) / 10;
  //5星评价为起始坐标
  starsList.reverse();

  const reviewListOpenHandler = () => {
    setReviewFold(reviewList.length + 1);
  };

  const reviewListCloseHandler = () => {
    setReviewFold(3);
  };

  return (
    <div className="reviews-container">
      <h2 className="review">レビュー</h2>
      <div className="review-score-container">
        <div className="review-average-score-area">
          <div>総合評価</div>
          <div className="average-score">{averageScore}</div>
          <div>
            <Rating
              name="half-rating"
              precision={0.1}
              value={averageScore}
              size="small"
              readOnly
            />
          </div>
          <div>（{reviewList.length}）</div>
        </div>
        <div className="review-stars-area">
          {starsList.map((star, index) => {
            return (
              <div key={index} className="review-graph-row-container">
                <Rating
                  name="read-only"
                  value={5 - index}
                  size="small"
                  readOnly
                />
                <div className="meter-visible-bar">
                  <div
                    className="meter-bar"
                    style={{
                      width: `${Math.trunc((star / reviewList.length) * 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="review-score-num">{star}人</p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="review-stars-and-nums">
        {reviewList.length}評価　{reviewList.length}商品レビュー
      </p>
      <div className="write-review-container">
        <button className="write-review-button">商品レビューを書く</button>
      </div>
      <div className="review-list-container">
        <ul>
          {reviewList.map((review, index) => {
            return (
              <ReviewCommentAndImgs
                key={review.reviewId}
                review={review}
                index={index}
                reviewFold={reviewFold}
                modalOnHandler={modalOnHandler}
              />
            );
          })}
        </ul>
        <div className="comment-open-button-container">
          <p>
            <a className="comment-open-button">
              <span
                onClick={reviewListOpenHandler}
                style={{ display: reviewFold > 3 ? "none" : "inline" }}
              >
                レビューをもっと見る（3/{reviewList.length}）
              </span>
              <span
                onClick={reviewListCloseHandler}
                style={{
                  display:
                    reviewFold < reviewList.length + 1 ? "none" : "inline",
                }}
              >
                閉じる
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SkuReview;
