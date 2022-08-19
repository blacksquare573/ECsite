/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { jest } from "@jest/globals";
import SkuTitle from "./components/SkuPage/SkuTitle.component";
import { SkuTitleProps } from "./components/SkuPage/SkuTitle.component";
import renderer from "react-test-renderer";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("render skuTitle", () => {
  const mockSkuName = "両面使える敷きパッド　シングル(NクールWSP n-s GY S)";
  const mockSkuId = 10011;
  expect.assertions(1);
  const testSkuTitle = renderer
    .create(<SkuTitle skuName={mockSkuName} skuId={mockSkuId} />)
    .toJSON();
  return expect(testSkuTitle).toMatchSnapshot();
});

test("render App", () => {
  render(<App />);
});
