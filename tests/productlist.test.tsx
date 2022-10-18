import { render, fireEvent } from "@testing-library/react";
import singletonRouter from "next/router";
import { QueryClient } from "@tanstack/react-query";
import Search from "../src/header/components/Header";
import mockRouter from "next-router-mock";
import Link from "next/link";

// jest mock error 해결: https://lightrun.com/answers/scottrippey-next-router-mock-issue-with-nextlink-in-next-1220
jest.mock("next/dist/client/router", () => require("next-router-mock"));
jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});
/*
상품 리스트 시나리오
1. 검색 버튼 누른 후 query string 확인
2. 상품 리스트 개수가 0일 때 <NotFound /> 컴포넌트 렌더링
*/
describe("product list", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  const setup = () => {
    const { getByLabelText } = render(<Search />);
    const input = getByLabelText("searchInput");
    const button = getByLabelText("searchBtn");
    return {
      input,
      button,
    };
  };
  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("changes input", () => {
    const { input, button } = setup();
    const value = "silver";
    fireEvent.change(input, {
      target: {
        value,
      },
    });
    expect(input).toHaveAttribute("value", value);
  });

  it("click button", () => {
    const value = "silver";
    const { input, button } = setup();
    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);
    expect(singletonRouter).toMatchObject({ asPath: `/?keyword=${value}` });
  });
});
