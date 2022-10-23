import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { blurDataUrl } from "../../shared/data/base64";
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
        blurDataURL={blurDataUrl}
      />
      <List.Info>
        <List.Brand>{value.brand}</List.Brand>
        <List.Name>{value.name}</List.Name>
        <List.Price>{value.base_price}</List.Price>
      </List.Info>
    </List.Item>
  );
};

export default ListItem;
