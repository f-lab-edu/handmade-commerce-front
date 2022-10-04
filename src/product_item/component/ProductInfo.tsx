import { css } from "@emotion/react";
import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { ProductType } from "../../product_list/interface";
import DividerLine from "../../shared/component/Divider";
import Divider from "../../shared/component/Divider";
import FavoriteButton from "./FavoriteButton";
import InfoBox from "./InfoBox";

const info_css = {
  name: css({
    fontSize: 30,
    fontWeight: "bold",
  }),
  brand: css({
    fontSize: 18,
  }),
  title_box: css({
    width: 125,
  }),
  price: css({
    fontSize: 20,
    fontWeight: "bold",
  }),
  sale_price: css({
    color: "orange",
  }),
};

const ProductInfo = ({ name, brand, base_price, id, mainImg }: ProductType) => {
  const SaleInfo = () => {
    return (
      <>
        <div>
          <div css={[flex_css.flex_row]}>
            <span>H SHOP은 </span>
            <span css={info_css.sale_price}>&nbsp;1:1 주문&nbsp;</span>
            <span>제작 방식입니다.</span>
          </div>
          <span>주문은 항상 이메일로 받습니다.</span>
        </div>
        {/* <br />
        <div>
          <div css={[flex_css.flex_row]}>
            <span>TOSS</span>
            <span css={info_css.sale_price}>&nbsp;3000원&nbsp;</span>
            <span>할인</span>
          </div>
        </div> */}
      </>
    );
  };
  const PriceInfo = () => {
    return (
      <div css={[flex_css.flex_row, flex_css.flex_center]}>
        <span css={info_css.price}>{base_price}</span>
        <span>원</span>
      </div>
    );
  };
  return (
    <div css={flex_css.flex_column}>
      <span css={info_css.name}>{name}</span>
      <br />
      <span css={info_css.brand}>{brand}</span>
      <br />
      <InfoBox>
        <InfoBox.Title>정상가</InfoBox.Title>
        <InfoBox.Content>
          <PriceInfo />
        </InfoBox.Content>
      </InfoBox>
      <Divider color="black" marginBottom={20} marginTop={20} height={3} />
      <InfoBox>
        <InfoBox.Title>주문</InfoBox.Title>
        <InfoBox.Content>
          <SaleInfo />
        </InfoBox.Content>
      </InfoBox>
      {/* <DividerLine marginBottom={20} marginTop={20} />
      <InfoBox>
        <InfoBox.Title>무이자 할부</InfoBox.Title>
        <InfoBox.Content>
          <span>최대 6개월</span>
        </InfoBox.Content>
      </InfoBox> */}
      <FavoriteButton
        id={id!}
        name={name!}
        brand={brand!}
        base_price={base_price!}
        mainImg={mainImg!}
      />
    </div>
  );
};

export default ProductInfo;
