import React, { useEffect } from "react";
import Logo from "./Logo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { flex_css } from "../../../shared/styles/shared";
import { css } from "@emotion/react";
import Link from "next/link";
import { useFavoriteContext } from "../../context/FavoriteContext";

const cart_css = {
  container: css({
    justifyContent: "space-between",
  }),
  item: css({
    cursor: "pointer",
  }),
};

const Cart = () => {
  const { count, setCount } = useFavoriteContext()!;

  useEffect(() => {
    const itemCount = JSON.parse(localStorage.getItem("favorite")!) || [];
    setCount!(itemCount.length);
  }, [setCount]);

  return (
    <div css={[flex_css.flex_row, cart_css.container]}>
      <Logo />
      <Link href={"/favorite"}>
        <div css={[flex_css.flex_column, flex_css.flex_center, cart_css.item]}>
          <FavoriteIcon fontSize="large" />
          <span>{count}</span>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
