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
import { useFavoriteItem } from "../src/hook/useFavoriteStorage";
import Head from "next/head";
import Favorite from "../src/favorite/components/Favorite";
import FavoriteTable from "../src/favorite/components/FavoriteTable";

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

const FavoritePage = () => {
  // const [data, setData] = useState<FavItem[]>();
  const { count } = useFavoriteContext();

  return (
    <div>
      <Head>
        <title>찜한 상품 목록</title>
        <meta name="description" content="찜한 상품 목록 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Favorite>
          <Favorite.Title>{count}</Favorite.Title>
          <FavoriteTable />
        </Favorite>
      </Container>
    </div>
  );
};

export default FavoritePage;
