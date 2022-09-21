import React from "react";
import AutoHeightImage from "../../shared/component/AutoHeightImage";
import Image from "next/image";
import { flex_css } from "../../../shared/styles/shared";
import { css } from "@emotion/react";

interface Props {
  images: string[];
}

const image_css = {
  image: css({
    marginTop: 20,
    marginRight: 20,
  }),
};

const ProductImage = ({ images }: Props) => {
  return (
    <div css={flex_css.flex_column}>
      <Image src={images[0]} height={500} width={500} alt="" />
      <div css={flex_css.flex_row}>
        {images.map((x, i) => {
          return (
            <div key={i} css={image_css.image}>
              <Image src={x} height={80} width={60} alt="detailImg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
