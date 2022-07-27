import { Link } from "react-router-dom";
import "./PageChangeBar.styles.css";

const PageChangeBar = ({
  pageNow,
  setPageNow,
  numsOfItems,
  categoryName,
  firstLevelName,
}) => {
  //   console.log(pageNow, numsOfItems);
  const pageTotal = Math.ceil(numsOfItems / 10);

  let pageButtonList = [];
  for (var i = 1; i <= pageTotal; i++) {
    pageButtonList.push(i);
  }

  const pageChange = (pageNum) => {
    setPageNow(pageNum);
  };

  //   console.log(pageButtonList);
  return (
    <ul className="page-change-bar">
      {pageButtonList.map((pageNum) => {
        return (
          <li>
            <Link
              to={`/itemList/${categoryName}/${pageNum}`}
              state={{ categoryName, firstLevelName }}
              onClick={(event) => pageChange(pageNum)}
            >
              <span className="page-num-container">{pageNum}</span>
            </Link>
          </li>
        );
      })}
      <li className="next-page-button">次へ⇒</li>
    </ul>
  );
};
export default PageChangeBar;
