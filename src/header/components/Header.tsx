import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import Category from "./Category";
import Logo from "./Logo";
import Search from "./Search";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header css={flex_css.flex_column}>
      <Logo />
      <Search />
      <Category />
    </header>
  );
};

export default Header;
