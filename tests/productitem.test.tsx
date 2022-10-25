import { render, fireEvent } from "@testing-library/react";
import singletonRouter from "next/router";
import { QueryClient } from "@tanstack/react-query";
import mockRouter from "next-router-mock";
import Link from "next/link";
import FavoriteButton from "../src/product_item/component/FavoriteButton";
import { FavoriteContext } from "../src/context/FavoriteContext";
import Cart from "../src/header/components/Cart";
import { ProductType } from "../src/product_list/interface";

// jest mock error 해결: https://lightrun.com/answers/scottrippey-next-router-mock-issue-with-nextlink-in-next-1220
jest.mock("next/dist/client/router", () => require("next-router-mock"));
jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

/*
상품 아이템 시나리오
1. 상품은 카트에 추가
2. 만약 카트에 상품이 있다면 이미 존재한다는 alert 창 확인
*/
const props = {
  id: 4,
  name: "[단독]Bella Velvet Pearl Hairband",
  brand: "VINTAGE HOLLYWOOD",
  base_price: "49,000",
  mainImg:
    "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
};
describe("상품 상세 페이지 테스트", () => {
  test("찜하기 추가", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    const { getByText } = render(<FavoriteButton {...props} />);
    const button = getByText("찜하기");
    fireEvent.click(button);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "favorite",
      JSON.stringify([props])
    );
  });

  test("이미 카트에 추가되었음", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
    const localData = window.localStorage.getItem("favorite");
    const found = JSON.parse(localData!).find(
      (e: ProductType) => e.id === props.id
    );
    const res = Boolean(found.id);
    expect(true).toBe(res);
    expect(window.alert);
  });
});
