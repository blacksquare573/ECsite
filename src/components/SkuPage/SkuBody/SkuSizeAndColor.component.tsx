import { Fragment, ChangeEventHandler } from "react";
import { color } from "../SkuPage.component";
import "./SkuSizeAndColor.styles.css";

type stringSetter = React.Dispatch<React.SetStateAction<string>>;
type SkuSizeAndColorProps = {
  size: string;
  setSize: stringSetter;
  sizeList: string[];
  colorNow: string;
  setColor: stringSetter;
  colorList: color[];
  catchcopy: string;
  price: number;
  point: number;
  featureIconList: string[];
  skuId: number;
  sizeDetail: string;
  material: string;
  weight: string;
  warranty: string;
};

const SkuSizeAndColor = ({
  size,
  setSize,
  sizeList,
  colorNow,
  setColor,
  colorList,
  catchcopy,
  price,
  point,
  featureIconList,
  skuId,
  sizeDetail,
  material,
  weight,
  warranty,
}: SkuSizeAndColorProps) => {
  const selectSizeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSize(event.target.value);
  };

  const selectColorHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setColor(event.target.value);
  };

  return (
    <Fragment>
      <div className="sizes-and-colors-container">
        <dl className="choose-size-and-color">
          <dt>
            サイズ：<b>{size}</b>
          </dt>
          <dd>
            <div className="size-selector-container">
              <select className="size-selector" onChange={selectSizeHandler}>
                {sizeList.map((size, index) => {
                  return (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
          </dd>
          <dt>
            カラー：<b>{colorNow}</b>
          </dt>
          <dd>
            <ul className="color-selector-container">
              {colorList.map((color, index) => {
                return (
                  <li key={index}>
                    <label className="color-circle-outside">
                      <input
                        type="radio"
                        checked={color.color === colorNow}
                        value={color.color}
                        onChange={selectColorHandler}
                      />
                      <span className="color-circle-inside">
                        <img src={color.colorImg} />
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </dd>
        </dl>
        <div className="catchcopy-container">{catchcopy}</div>
        <div className="price-and-point-container">
          <div className="price-container">
            <dl className="price">
              <dd className="price-text">
                {price}
                <span>円</span>
              </dd>
            </dl>
          </div>
          <div className="point-container">
            <p className="point">
              獲得ポイント <span className="point-digit"> {point} pt</span> 付与
            </p>
            <p className="point-info">ポイントについて</p>
          </div>
        </div>
      </div>
      <div className="sku-info-container">
        <h2>仕様・サイズ</h2>
        <ul className="sku-info-icon-container">
          {featureIconList.map((icon, index) => {
            return (
              <li key={index}>
                <img src={icon} />
              </li>
            );
          })}
        </ul>
        <div className="sku-info-table-container">
          <table className="sku-info-table">
            <tbody>
              <tr>
                <th>商品コード</th>
                <td>{skuId}</td>
              </tr>
              <tr>
                <th>カラー</th>
                <td>{colorNow}</td>
              </tr>
              <tr>
                <th>サイズ</th>
                <td>{sizeDetail}</td>
              </tr>
              <tr>
                <th>素材</th>
                <td>{material}</td>
              </tr>
              <tr>
                <th>重量</th>
                <td>{weight}</td>
              </tr>
              <tr>
                <th>保証年数</th>
                <td>{warranty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default SkuSizeAndColor;
