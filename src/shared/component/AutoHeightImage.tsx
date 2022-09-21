/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from "react";
import Image, { ImageProps } from "next/image";
import equal from "fast-deep-equal";

import { AutoHeightImageWrapper } from "./AutoHeightImage.styles";

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
  <AutoHeightImageWrapper>
    <Image layout="fill" className="autoImage" {...props} />
  </AutoHeightImageWrapper>
);

export default AutoHeightImage;
