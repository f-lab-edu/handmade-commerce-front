import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { ProductType } from "../interface";
import List from "./List";

interface Props {
  value: ProductType;
}

const ListItem = ({ value }: Props) => {
  return (
    <List.Item id={value.id}>
      <Image
        src={value?.mainImg || ""}
        width={300}
        height={400}
        alt="thumbnail"
        layout="responsive"
        placeholder="blur"
        blurDataURL="../../images/default-image.png"
      />
      <List.Info>
        <List.InfoText>{value.brand}</List.InfoText>
        <List.InfoText>{value.name}</List.InfoText>
        <List.InfoText>{value.base_price}</List.InfoText>
      </List.Info>
    </List.Item>
  );
};

export default ListItem;
