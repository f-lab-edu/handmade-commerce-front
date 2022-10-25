import { Button, Checkbox } from "@mui/material";
import React, {
  ChangeEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { ProductType } from "../../product_list/interface";
import Favorite from "./Favorite";
import InfoItem from "./InfoItem";
import { css } from "@emotion/react";
import { useFavoriteContext } from "../../../src/context/FavoriteContext";
import { useFavoriteItem } from "../../../src/hook/useFavoriteStorage";

interface FavoriteItem extends ProductType {
  checked: boolean;
}

interface Props {
  //   data: FavoriteItem[] | undefined;
  //   setData: Dispatch<SetStateAction<FavoriteItem[] | undefined>>;
  //   onToggleItem: (e: ChangeEvent<HTMLInputElement>, item: FavoriteItem) => void;
  //   onRemoveItem: (id: number) => void;
  //   onRemoveItems: () => void;
  // onCheckAllItem: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FavoriteTable = ({}: //   data,
//   setData,
//   onCheckAllItem,
//   onToggleItem,
//   onRemoveItem,
//   onRemoveItems,
Props) => {
  const label = { inputProps: { "aria-label": "select-all-checkbox" } };
  const labelItem = { inputProps: { "aria-label": "select-checkbox" } };
  const [data, setData] = useState<FavoriteItem[]>();
  const { setCount, count } = useFavoriteContext();
  const [favoriteData, setFavoriteData] = useFavoriteItem();

  useEffect(() => {
    const favDataArr = favoriteData?.map((x: FavoriteItem) => ({
      ...x,
      checked: false,
    }));
    setData(favDataArr);
  }, [favoriteData, setData]);

  const onRemoveItems = () => {
    const removedArr = data?.filter((item) => item.checked === true);
    const notRemovedArr = data?.filter((item) => item.checked !== true);
    if (removedArr?.length === 0) return;
    setData(notRemovedArr);
    setCount(notRemovedArr?.length!);
    setFavoriteData(notRemovedArr);
  };

  const onToggleItem = (
    e: ChangeEvent<HTMLInputElement>,
    item: FavoriteItem
  ) => {
    const filterItem = data?.map((x) => {
      if (x.id === item.id) x.checked = e.target.checked;
      else x;
      return x;
    });
    console.log(filterItem);
    setData(filterItem);
  };

  const onCheckAllItem = (e: ChangeEvent<HTMLInputElement>) => {
    const filterItem = data?.map((x) => {
      x.checked = e.target.checked;
      return x;
    });
    setData(filterItem);
  };

  const onRemoveItem = (id: number) => {
    const filterItem = data?.filter((item) => item.id !== id);
    setData(filterItem);
    setCount(filterItem?.length!);
    setFavoriteData(filterItem);
  };

  const TableBodyContainer = (x: FavoriteItem) => {
    return (
      <Favorite.TableRow key={x.id}>
        <Favorite.TableCell>
          <Checkbox
            // {...labelItem}
            onChange={(e) => onToggleItem(e, x)}
            checked={x.checked}
            inputProps={{ "aria-label": `row-item-${x.id}` }}
            // data-testid={`row-item-${x.id}`}
          />
        </Favorite.TableCell>
        <Favorite.TableCell>
          <InfoItem items={x} />
        </Favorite.TableCell>
        <Favorite.TableCell>{x.base_price}</Favorite.TableCell>
        <Favorite.TableCell>
          <Button
            variant="outlined"
            onClick={() => onRemoveItem(x.id!)}
            data-testid="delete-button"
          >
            삭제 X
          </Button>
        </Favorite.TableCell>
      </Favorite.TableRow>
    );
  };

  return (
    <div
      css={css`
        border-top-width: 3;
        border-top-style: solid;
      `}
    >
      <Favorite.Table data-testid="test-table">
        <Favorite.TableHead>
          <Favorite.TableCell>
            <Checkbox {...label} onChange={(e) => onCheckAllItem(e)} />
          </Favorite.TableCell>
          <Favorite.TableCell>상품정보</Favorite.TableCell>
          <Favorite.TableCell>주문금액</Favorite.TableCell>
          <Favorite.TableCell>{}</Favorite.TableCell>
        </Favorite.TableHead>
        <Favorite.TableBody>
          {data?.map((x) => {
            return <TableBodyContainer key={x.id} {...x} />;
          })}
        </Favorite.TableBody>
      </Favorite.Table>
      <Favorite.Button onClick={onRemoveItems}>삭제하기</Favorite.Button>
    </div>
  );
};

export default FavoriteTable;
