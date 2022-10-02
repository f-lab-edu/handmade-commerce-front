import { css } from "@emotion/react";
import React from "react";
import { flex_css } from "../../../shared/styles/shared";
import { ProductType } from "../../product_list/interface";
import DividerLine from "../../shared/component/Divider";
import Divider from "../../shared/component/Divider";
import ButtonContainer from "./ButtonContainer";
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

interface Props {
  name: string;
  brand: string;
  base_price: string;
}

const ProductInfo = ({ name, brand, base_price }: Props) => {
  const SaleInfo = () => {
    return (
      <>
        <div>
          <div css={[flex_css.flex_row]}>
            <span>PAYCO</span>
            <span css={info_css.sale_price}>&nbsp;4000원&nbsp;</span>
            <span>할인</span>
          </div>
          <span>4천원 이상 생애 첫 결제시 즉시 4천원 캐시백</span>
        </div>
        <br />
        <div>
          <div css={[flex_css.flex_row]}>
            <span>TOSS</span>
            <span css={info_css.sale_price}>&nbsp;3000원&nbsp;</span>
            <span>할인</span>
          </div>
          <span>토스페이로 5만원 이상 생애 첫 결제시 즉시 4천원 캐시백</span>
        </div>
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
        <InfoBox.Title>추가 혜택가</InfoBox.Title>
        <InfoBox.Content>
          <SaleInfo />
        </InfoBox.Content>
      </InfoBox>
      <DividerLine marginBottom={20} marginTop={20} />
      <InfoBox>
        <InfoBox.Title>무이자 할부</InfoBox.Title>
        <InfoBox.Content>
          <span>최대 6개월</span>
        </InfoBox.Content>
      </InfoBox>
      <ButtonContainer />
    </div>
  );
};

export default ProductInfo;
