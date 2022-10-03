/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import React, { useState } from "react";

type Props = {};
const src = "https://images.unsplash.com/photo-1444065381814-865dc9da92c0";
const csss = css({
  width: 300,
  backgroundRepeat: "no-repeat",
});
const Testtt = (props: Props) => {
  const [data, setData] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
  });
  const onMouseOver = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setData({ ...data, backgroundPosition: `${x}% ${y}%` });
  };
  return (
    <div css={csss} onMouseOver={onMouseOver} style={data}>
      <img src={src} alt="test" />
    </div>
  );
};

export default Testtt;
