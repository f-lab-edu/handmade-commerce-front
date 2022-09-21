import React from "react";
import AutoHeightImage from "../../shared/component/AutoHeightImage";
import Image from "next/image";
import { flex_css } from "../../../shared/styles/shared";
import { css } from "@emotion/react";
import DefaultImage from "../../images/default-image.png";

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
      {images.length > 0 && (
        <Image
          src={images[0] || DefaultImage}
          height={500}
          width={500}
          alt=""
        />
      )}
      <div css={flex_css.flex_row}>
        {images.length > 0 &&
          images.map((x, i) => {
            return (
              <div key={i} css={image_css.image}>
                <Image
                  src={x || DefaultImage}
                  height={80}
                  width={60}
                  alt="detailImg"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImage;
