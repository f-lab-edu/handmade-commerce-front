import { css } from "@emotion/react";
import { Divider } from "@mui/material";
import React from "react";

interface Props {
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  height?: number;
}

const DividerLine = ({
  color = "#e8e6e6",
  marginBottom = 0,
  marginTop = 0,
  height = 1,
}: Props) => {
  return <Divider color={color} style={{ marginTop, marginBottom, height }} />;
};

export default DividerLine;
