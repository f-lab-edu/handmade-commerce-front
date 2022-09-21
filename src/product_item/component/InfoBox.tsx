import { css } from "@emotion/react";
import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { ChildrenProps } from "../../shared/interface/props";

type Props = {};

const info_css = {
  title_box: css({
    width: 125,
  }),
};

const InfoBox = ({ children }: ChildrenProps) => {
  return <div css={flex_css.flex_row}>{children}</div>;
};

const Title = ({ children }: ChildrenProps) => {
  return <div css={info_css.title_box}>{children}</div>;
};

const Content = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

InfoBox.Title = Title;
InfoBox.Content = Content;

export default InfoBox;
