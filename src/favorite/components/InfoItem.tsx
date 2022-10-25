import React from "react";
import { ProductType } from "src/product_list/interface";
import Image from "next/image";
import { css } from "@emotion/react";
import { flex_css } from "../../../shared/styles/shared";

const favorite_css = {
  info: css({
    marginLeft: 30,
  }),
};
interface Props {
  items: ProductType;
}

const InfoItem = ({ items }: Props) => {
  return (
    <div css={flex_css.flex_row}>
      <Image src={items.mainImg!} width={100} height={130} alt="mainImg" />
      <div css={[flex_css.flex_column, favorite_css.info]}>
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {items.name}
        </span>
        <span>{items.brand}</span>
      </div>
    </div>
  );
};

export default InfoItem;
