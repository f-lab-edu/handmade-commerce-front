import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import Cart from "./Cart";
import Category from "./Category";
import Search from "./Search";

const Header = () => {
  return (
    <header css={flex_css.flex_column}>
      <Cart />
      <Search />
      <Category />
    </header>
  );
};

export default Header;
