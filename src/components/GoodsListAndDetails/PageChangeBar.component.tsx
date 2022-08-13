import { Link } from "react-router-dom";
import "./PageChangeBar.styles.css";

type pageChangeBarProps = {
  pageNow: number;
  numsOfItems: number;
  categoryName: string;
  firstCategoryName: string;
  secondCategoryName: string;
};

const PageChangeBar = ({
  pageNow,
  numsOfItems,
  categoryName,
  firstCategoryName,
  secondCategoryName,
}: pageChangeBarProps) => {
  //   console.log(pageNow, numsOfItems);
  const pageTotal = Math.ceil(numsOfItems / 10);

  let pageButtonList: number[] = [];
  for (var i = 1; i <= pageTotal; i++) {
    pageButtonList.push(i);
  }

  // const pageChange = (pageNum) => {
  //   setPageNow(pageNum);
  // };

  //   console.log(pageButtonList);
  return (
    <ul className="page-change-bar">
      {pageNow !== 1 && (
        <li className="previous-page-button">
          <Link
            to={
              secondCategoryName
                ? `/itemList/${firstCategoryName}/${secondCategoryName}/${categoryName}/${
                    pageNow - 1
                  }`
                : `/itemList/${firstCategoryName}/${categoryName}/${
                    pageNow - 1
                  }`
            }
          >
            ⇐前へ
          </Link>
        </li>
      )}
      {pageButtonList.map((pageNum) => {
        return (
          <li key={pageNum}>
            {pageNow === pageNum ? (
              <span className="page-num-container-now">{pageNum}</span>
            ) : (
              <Link
                to={
                  secondCategoryName
                    ? `/itemList/${firstCategoryName}/${secondCategoryName}/${categoryName}/${pageNum}`
                    : `/itemList/${firstCategoryName}/${categoryName}/${pageNum}`
                }
                // state={{ categoryName, firstLevelName, pageNow: pageNum, }}
                // onClick={(event) => pageChange(pageNum)}
              >
                <span className="page-num-container">{pageNum}</span>
              </Link>
            )}
          </li>
        );
      })}
      {pageNow !== pageButtonList[pageButtonList.length - 1] && (
        <li className="next-page-button">
          <Link
            to={
              secondCategoryName
                ? `/itemList/${firstCategoryName}/${secondCategoryName}/${categoryName}/${
                    pageNow + 1
                  }`
                : `/itemList/${firstCategoryName}/${categoryName}/${
                    pageNow + 1
                  }`
            }
          >
            次へ⇒
          </Link>
        </li>
      )}
    </ul>
  );
};
export default PageChangeBar;
