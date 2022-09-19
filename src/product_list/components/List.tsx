import { css } from "@emotion/react";
import React from "react";
import { flex_css, width100 } from "../../../shared/styles/shared";
import { ChildrenProps } from "../../shared/interface/props";
import { ProductListType } from "../interface";
// import ListContent from './ListContent'
import ListItem from "./ListItem";

const listStyle = css({
  maxWidth: 1600,
  width: "100%",
  marginRight: "3%",
  marginLeft: 30,
});

const listItemStyle = css({
  width: 200,
  marginRight: 30,
});

const List = ({ children }: ChildrenProps) => {
  return (
    <main css={[width100, flex_css.flex_center, flex_css.flex_column]}>
      {children}
    </main>
  );
};

const Content = ({ children }: ChildrenProps) => {
  return (
    <section css={[listStyle, flex_css.flex_row, flex_css.flex_wrap]}>
      {children}
      {/* {data?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)} */}
    </section>
  );
};

const Item = ({ children }: ChildrenProps) => {
  return <li css={listItemStyle}>{children}</li>;
};

const Info = ({ children }: ChildrenProps) => {
  return <div css={flex_css.flex_column}>{children}</div>;
};

const InfoText = ({ children }: ChildrenProps) => {
  return <span>{children}</span>;
};

List.Content = Content;
List.Item = Item;
List.Info = Info;
List.InfoText = InfoText;

export default List;
