import { render, fireEvent } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Favorite from "@/pages/favorite";

const props = [
  {
    id: 4,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
  },
  {
    id: 5,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
  },
];

/*
카트 아이템 리스트 시나리오
1. checkbox 전체 클릭
2. 선택된 아이템 다중 삭제
3. 아이템 삭제
4. 아이템 삭제 시 context count 변경 확인
*/
describe("cart list", () => {
  it("click the checkbox", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    window.localStorage.setItem("favorite", JSON.stringify(props));
    const { getByLabelText, getAllByRole } = render(<Favorite />);
  });
});
