import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import { flex_css, width100 } from "../../../shared/styles/shared";
import { ChildrenProps } from "../../shared/interface/props";

const listStyle = css({
  // maxWidth: 1600,
  width: "100%",
  marginRight: 30,
  marginLeft: 30,
  justifyContent: "center",
});

const listItemStyle = css({
  width: 200,
  margin: 10,
  listStyle: "none",
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

interface ItemProps extends ChildrenProps {
  id?: number;
}

const Item = ({ children, id }: ItemProps) => {
  return (
    <li css={listItemStyle}>
      <Link href={`/product/${id}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
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
