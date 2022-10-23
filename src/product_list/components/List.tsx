import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import React from "react";
import { flex_css, width100 } from "../../../shared/styles/shared";
import { ChildrenProps } from "../../shared/interface/props";

const list_css = {
  container: css({
    // maxWidth: 1600,
    width: "100%",
    marginRight: 30,
    marginLeft: 30,
    justifyContent: "center",
  }),
  item: css({
    width: 200,
    margin: 10,
    listStyle: "none",
  }),
  brand: css({
    fontWeight: " bold",
  }),
  name: css({
    color: "grey",
  }),
};

const List = ({ children }: ChildrenProps) => {
  return (
    <main css={[width100, flex_css.flex_center, flex_css.flex_column]}>
      {children}
    </main>
  );
};

const Content = ({ children }: ChildrenProps) => {
  return (
    <section css={[list_css.container, flex_css.flex_row, flex_css.flex_wrap]}>
      {children}
      {/* {data?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)} */}
    </section>
  );
};

interface ItemProps extends ChildrenProps {
  id?: number;
}

const Item = ({ children, id }: ItemProps) => {
  return (
    <li css={list_css.item}>
      <Link href={`/product/${id}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Info = ({ children }: ChildrenProps) => {
  return <div css={[flex_css.flex_column]}>{children}</div>;
};

const InfoTop = ({ children }: ChildrenProps) => {
  return <div css={[flex_css.flex_column]}>{children}</div>;
};

const Brand = ({ children }: ChildrenProps) => {
  return <span css={list_css.brand}>{children}</span>;
};

const Name = ({ children }: ChildrenProps) => {
  return <span css={list_css.name}>{children}</span>;
};

const Price = ({ children }: ChildrenProps) => {
  return <span css={list_css.brand}>{children}</span>;
};

List.Content = Content;
List.Item = Item;
List.Info = Info;
List.InfoTop = InfoTop;
List.Brand = Brand;
List.Name = Name;
List.Price = Price;

export default List;
