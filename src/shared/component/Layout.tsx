import React from "react";
import { ChildrenProps } from "../interface/props";
import { css } from "@emotion/react";

const layout_css = {
  container: css({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    paddingRight: "15%",
    paddingLeft: "15%",
    marginTop: 30,
  }),
  item: css({
    width: "100%",
    minWidth: 1300,
    maxWidth: 1700,
  }),
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div css={layout_css.container}>
      <div css={layout_css.item}>{children}</div>
    </div>
  );
};

export default Layout;
