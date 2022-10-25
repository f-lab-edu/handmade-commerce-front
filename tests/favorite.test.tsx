import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Favorite from "@/pages/favorite";
import FavoriteTable from "../src/favorite/components/FavoriteTable";
import { useState } from "react";
import { ProductType } from "../src/product_list/interface";

const props = [
  {
    id: 1,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
    checked: false,
  },
  {
    id: 2,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
    checked: false,
  },
  {
    id: 3,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
    checked: false,
  },
  {
    id: 4,
    name: "[단독]Bella Velvet Pearl Hairband",
    brand: "VINTAGE HOLLYWOOD",
    base_price: "49,000",
    mainImg:
      "https://image.wconcept.co.kr/productimg/image/img1/51/301090651.jpg",
    checked: false,
  },
];

interface FavoriteItem extends ProductType {
  checked: boolean;
}

/*
카트 아이템 리스트 시나리오
1. checkbox 전체 클릭
2. 선택된 아이템 다중 삭제
3. 아이템 삭제
4. 아이템 삭제 시 context count 변경 확인
*/
describe("찜한 상품 목록", () => {
  afterEach(cleanup);
  const setup = () => {
    const { getByLabelText, getAllByTestId, getByTestId } = render(
      <Favorite />
    );
    const allSelectedCheckbox = getByLabelText("select-all-checkbox");
    const selectedItemButton = getByTestId("delete-selected-item-btn"); // 선택된 아이템 삭제 버튼
    const favoriteRow = getAllByTestId("favorite-row");
    const deletebutton = getAllByTestId("delete-button"); // 단일 아이템 선택 버튼

    return {
      allSelectedCheckbox,
      selectedItemButton,
      favoriteRow,
      deletebutton,
    };
  };
  test("찜한 상품 전체 선택 체크박스 클릭 후 삭제", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    window.localStorage.setItem("favorite", JSON.stringify(props)); // localstorage mocking (4개)
    const { allSelectedCheckbox, selectedItemButton } = setup();
    fireEvent.click(allSelectedCheckbox); // 전체 선택 체크박스 클릭
    expect(allSelectedCheckbox).toBeChecked(); // 모든 체크박스 true 확인

    fireEvent.click(selectedItemButton); // 삭제 버튼 클릭
    const favoriteCount = screen.getByTestId("favorite-count");
    expect(favoriteCount).toHaveTextContent("상품 0"); // 모든 상품
  });

  test("2개의 버튼 종류 테스트(단일 선택, 다중 선택)", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    window.localStorage.setItem("favorite", JSON.stringify(props)); // localstorage mocking (4개)
    const { favoriteRow, deletebutton, selectedItemButton } = setup();
    fireEvent.click(deletebutton[0]); // 첫번째(id=1) 아이템 삭제 (단일 아이템 삭제 버튼)
    const restFavoriteRow = screen.getAllByTestId("favorite-row");
    expect(restFavoriteRow.length).toBe(3); // 아이템 3개 남음(id=2, 3, 4)
    expect(favoriteRow[0]).not.toBeInTheDocument(); // 첫번째 아이템 페이지에서 삭제됨

    const row = screen.getByLabelText("row-item-4"); // 마지막(id=4) 아이템 선택
    fireEvent.click(row); // 마지막(id=4) 아이템 삭제
    expect(row).toBeChecked(); // 마지막 아이템 선택됨(checked=true)
    fireEvent.click(selectedItemButton); // 선택된 아이템 삭제 버튼 클릭 (선택된 아이템 삭제 버튼)
    const restFavoriteRow2 = screen.getAllByTestId("favorite-row");
    expect(restFavoriteRow2.length).toBe(2); // 남은 아이템 개수 2개 (id=2, 3)
  });
});
