import React from "react";
import LogoUrl from "../../images/Logo.png";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image src={LogoUrl} alt="logo" width={200} height={80} />
    </div>
  );
};

export default Logo;
