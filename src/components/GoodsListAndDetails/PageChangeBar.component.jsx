import "./PageChangeBar.styles.css";

const PageChangeBar = ({ page, numsOfgoods }) => {
  return (
    <ul className="page-change-bar">
      <li>map</li>
      <li className="next-page-button">次へ⇒</li>
    </ul>
  );
};
export default PageChangeBar;
