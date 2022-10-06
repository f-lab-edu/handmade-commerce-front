import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { flex_css } from "../../../shared/styles/shared";
import { css } from "@emotion/react";
import { blurDataUrl } from "../../shared/data/base64";
import ReactImageMagnify from "react-image-magnify";

interface Props {
  images: string[];
}

const image_css = {
  detailImage: css({
    marginTop: 20,
    marginRight: 20,
  }),
  zoom: css({
    zIndex: 99,
  }),
};

const ProductImage = ({ images }: Props) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  const onClickImage = async (imageUrl: string) => {
    setSelectedImg(imageUrl);
  };

  useEffect(() => {
    setSelectedImg(images[0]);
  }, [images]);

  return (
    <div css={[flex_css.flex_column]}>
      {/* {images.length > 0 && (
        <Image
          src={selectedImg}
          height={800}
          width={600}
          alt="detail-image"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          css={image_css.zoom}
        />
      )} */}
      <div css={image_css.zoom}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: selectedImg,
            },
            largeImage: {
              src: selectedImg,
              width: 1200,
              height: 1800,
            },
            isHintEnabled: true,
          }}
        />
      </div>
      <div css={[flex_css.flex_row]}>
        {images.length > 0 &&
          images.map((x, i) => {
            return (
              <div
                key={i}
                css={image_css.detailImage}
                onClick={() => onClickImage(x)}
              >
                <Image src={x} height={80} width={60} alt="detailImg" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImage;
