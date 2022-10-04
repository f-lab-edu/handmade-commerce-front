import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Container from "../src/shared/component/Container";
import { ProductType } from "../src/product_list/interface";
import { css } from "@emotion/react";
import { flex_css } from "../shared/styles/shared";
import Image from "next/image";
import { useFavoriteContext } from "../src/context/FavoriteContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const favorite_css = {
  container: css({
    borderTopStyle: "solid",
    borderTopWidth: 3,
  }),
  info: css({
    marginLeft: 30,
  }),
};

interface InfoProps {
  items: ProductType;
}

const Favorite = () => {
  const [data, setData] = useState<ProductType[]>([
    { id: 0, name: "", brand: "", base_price: "", mainImg: "" },
  ]);
  const { setCount, count } = useFavoriteContext();

  useEffect(() => {
    const fav_arr = JSON.parse(localStorage.getItem("favorite")!);
    console.log(fav_arr);
    setData(fav_arr || []);
  }, []);

  const onRemove = (id: number) => {
    const value = data.filter((item) => item.id !== id);
    setData(value);
    setCount(value.length);
    localStorage.setItem("favorite", JSON.stringify(value));
  };

  const InfoItem = ({ items }: InfoProps) => {
    return (
      <div css={flex_css.flex_row}>
        <Image src={items.mainImg!} width={100} height={130} alt="mainImg" />
        <div css={[flex_css.flex_column, favorite_css.info]}>
          <span
            css={css`
              font-weight: bold;
            `}
          >
            {items.name}
          </span>
          <span>{items.brand}</span>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div>
        <h1>상품 ({count})</h1>
        <div css={favorite_css.container}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} />
                </TableCell>
                <TableCell>상품정보</TableCell>
                <TableCell>주문금액</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 &&
                data.map((x) => {
                  return (
                    <TableRow key={x.id}>
                      <TableCell>
                        <Checkbox {...label} />
                      </TableCell>
                      <TableCell>
                        <InfoItem items={x} />
                      </TableCell>
                      <TableCell>{x.base_price}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => onRemove(x.id!)}
                        >
                          삭제 X
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default Favorite;
