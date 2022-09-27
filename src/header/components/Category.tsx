import React, { useState } from "react";
import { Grid } from "@mui/material";
import { css } from "@emotion/react";
import { category_list } from "../../product_list/data/category_list";
import { flex_css } from "../../../shared/styles/shared";
import Link from "next/link";
import { useHeader } from "../../hook/GlobalContext";

type Props = {};

const category_css = {
  container: css({
    backgroundColor: "black",
  }),
  item: css({
    fontWeight: "bold",
    marginTop: 13,
    marginBottom: 13,
    marginRight: 20,
    marginLeft: 20,
    listStyle: "none",
  }),
};

const Category = (props: Props) => {
  const { category } = useHeader();
  return (
    <ul css={[category_css.container, flex_css.flex_row, flex_css.flex_center]}>
      {category_list.map((x) => {
        return (
          <li
            key={x.id}
            css={[
              category_css.item,
              css({ color: category === String(x.id) ? "orange" : "white" }),
            ]}
          >
            <Link
              href={{
                pathname: "/",
                query: { category: x.id },
              }}
            >
              <a>{x.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
