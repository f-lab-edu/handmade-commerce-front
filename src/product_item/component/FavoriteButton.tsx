import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { ProductType } from "../../product_list/interface";

interface Props {
  name: string;
  brand: string;
  base_price: string;
  id: number;
  mainImg: string;
}

const FavoriteButton = ({ name, brand, base_price, id, mainImg }: Props) => {
  const { setCount } = useFavoriteContext()!;
  const router = useRouter();

  const onClick = () => {
    const res = JSON.parse(localStorage.getItem("favorite")!) || [];
    const found = res.find((e: ProductType) => e.id === id);
    console.log(found);

    if (found) {
      alert("이미 추가했습니다.");
    } else {
      localStorage.setItem(
        "favorite",
        JSON.stringify([...res, { id, name, brand, base_price, mainImg }])
      );
      setCount!(res.length + 1);
      router.push("/favorite");
    }
  };

  return (
    <Button
      style={{ marginTop: 30 }}
      variant="contained"
      color="secondary"
      onClick={onClick}
      size="large"
    >
      찜하기
    </Button>
  );
};

export default FavoriteButton;
