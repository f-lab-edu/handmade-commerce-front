import React, { useState, useEffect, ChangeEvent } from "react";
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
import { useLocalStorage } from "../src/hook/useLocalStorage";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const favorite_css = {
  container: css({
    borderTopStyle: "solid",
    borderTopWidth: 3,
  }),
  info: css({
    marginLeft: 30,
  }),
  delete: css({
    marginTop: 30,
  }),
};

interface FavItem extends ProductType {
  checked: boolean;
}

interface InfoProps {
  items: ProductType;
}

const defaultData: FavItem[] = [
  { id: 0, name: "", brand: "", base_price: "", mainImg: "", checked: false },
];

const Favorite = () => {
  const [data, setData] = useState<FavItem[]>(defaultData);
  const { setCount, count } = useFavoriteContext();
  const [locaData, setLocalData] = useLocalStorage("favorite", defaultData);

  useEffect(() => {
    const favDataArr = locaData?.map((x: FavItem) => ({
      ...x,
      checked: false,
    }));
    console.log(favDataArr);
    setData(favDataArr || []);
  }, [locaData]);

  const onRemoveItem = (id: number) => {
    const filterItem = data.filter((item) => item.id !== id);
    setData(filterItem);
    setCount(filterItem.length);
    setLocalData(filterItem);
  };

  const onRemoveItems = () => {
    const removedArr = data.filter((item) => item.checked === true);
    const notRemovedArr = data.filter((item) => item.checked !== true);
    if (removedArr.length === 0) return;
    setData(notRemovedArr);
    setCount(notRemovedArr.length);
    setLocalData(notRemovedArr);
  };

  const onCheckItem = (e: ChangeEvent<HTMLInputElement>, item: FavItem) => {
    const filterItem = data.map((x) => {
      if (x.id === item.id) x.checked = e.target.checked;
      else x;
      return x;
    });
    console.log(filterItem);
    setData(filterItem);
  };

  const onCheckAllItem = (e: ChangeEvent<HTMLInputElement>) => {
    const filterItem = data.map((x) => {
      x.checked = e.target.checked;
      return x;
    });
    setData(filterItem);
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
                  <Checkbox {...label} onChange={(e) => onCheckAllItem(e)} />
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
                        <Checkbox
                          {...label}
                          onChange={(e) => onCheckItem(e, x)}
                          checked={x.checked}
                        />
                      </TableCell>
                      <TableCell>
                        <InfoItem items={x} />
                      </TableCell>
                      <TableCell>{x.base_price}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => onRemoveItem(x.id!)}
                        >
                          삭제 X
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            css={favorite_css.delete}
            onClick={onRemoveItems}
          >
            삭제하기
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Favorite;
