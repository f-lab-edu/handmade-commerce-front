import React from "react";
import LogoUrl from "../../images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <div>
        <a>
          <Image
            src={LogoUrl}
            alt="logo"
            width={200}
            height={80}
            css={css`
              cursor: pointer;
            `}
          />
        </a>
      </div>
    </Link>
  );
};

export default Logo;
