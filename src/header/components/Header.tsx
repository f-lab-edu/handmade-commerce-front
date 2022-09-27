import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { useCategory } from "../../hook/GlobalContext";
import Category from "./Category";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const { keyword } = useCategory();
  return (
    <header css={flex_css.flex_column}>
      <Logo />
      <Search />
      {!keyword && <Category />}
    </header>
  );
};

export default Header;
