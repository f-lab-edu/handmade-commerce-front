import { css } from "@emotion/react";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { ReactFragment } from "react";
import { ChildrenProps } from "../../shared/interface/props";

const Product = ({ children }: ChildrenProps) => {
  return (
    <div
      css={css`
        /* background: yellow; */
        width: 100%;
      `}
    >
      {children}
    </div>
  );
};

const Head = ({ children }: ChildrenProps) => {
  return (
    <Grid2 container spacing={2}>
      {children}
    </Grid2>
  );
};

const HeadLeft = ({ children }: ChildrenProps) => {
  return <Grid2 xs={6}>{children}</Grid2>;
};

const HeadRight = ({ children }: any) => {
  return <Grid2 xs={6}>{children}</Grid2>;
};
const Body = ({ children }: ChildrenProps) => {
  return (
    <div
      css={css`
        background: green;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 600px;
        `}
      >
        {children}
      </div>
    </div>
  );
};

Product.Head = Head;
Product.HeadLeft = HeadLeft;
Product.HeadRight = HeadRight;
Product.Body = Body;
export default Product;
