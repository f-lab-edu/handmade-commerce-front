import { render, fireEvent } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { FavoriteContext } from "../src/context/FavoriteContext";
import Cart from "../src/header/components/Cart";

// jest mock error 해결: https://lightrun.com/answers/scottrippey-next-router-mock-issue-with-nextlink-in-next-1220
jest.mock("next/dist/client/router", () => require("next-router-mock"));
jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

/*
카트 아이템 개수 확인
1. context count 렌더링 확인
*/
describe("cart", () => {
  it("number of shopping cart items", () => {
    const count = 3;
    const { getByText } = render(
      <FavoriteContext.Provider value={{ count }}>
        <Cart />
      </FavoriteContext.Provider>
    );
    expect(getByText(count)).toBeInTheDocument();
  });
});
