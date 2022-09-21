import { css } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

interface Props {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonContainer = () => {
  const ButtonItem = ({ text, onClick }: Props) => {
    const button_css = css({
      width: "100%",
      height: 50,
      background: text === "주문하기" ? "black" : "#ededed",
      color: text === "주문하기" ? "white" : "black",
      borderWidth: 0,
    });
    return (
      <button css={button_css} onClick={onClick}>
        {text}
      </button>
    );
  };
  return (
    <Grid container>
      <Grid xs={6}>
        <ButtonItem text="주문하기" />
      </Grid>
      <Grid xs={6}>
        <ButtonItem text="장바구니" />
      </Grid>
    </Grid>
  );
};

export default ButtonContainer;
