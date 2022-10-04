import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { flex_css } from "../../../shared/styles/shared";

const Loading = () => {
  return (
    <div css={flex_css.flex_center}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
