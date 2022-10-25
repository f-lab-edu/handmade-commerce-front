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
import { filter, map } from "../../../src/shared/utils";

interface FavoriteItem extends ProductType {
  checked?: boolean;
}

const FavoriteTable = () => {
  const label = { inputProps: { "aria-label": "select-all-checkbox" } };
  const [data, setData] = useState<FavoriteItem[] | undefined>();
  const { setCount, count } = useFavoriteContext();
  const [favoriteData, setFavoriteData] = useFavoriteItem();

  useEffect(() => {
    const favDataArr = favoriteData?.map((x: FavoriteItem) => ({
      ...x,
      checked: false,
    }));
    setData(favDataArr);
  }, [favoriteData, setData]);

  const onRemoveItems = (
    value: FavoriteItem[],
    setData: (v: FavoriteItem[]) => void,
    setCount: (count: number) => void,
    setFavoriteData: (v: FavoriteItem[]) => void
  ) => {
    const removedArr = filter(
      (item: FavoriteItem) => item.checked === true,
      value
    );
    const notRemovedArr = filter(
      (item: FavoriteItem) => item.checked !== true,
      value
    );
    if (removedArr?.length === 0) return;
    setData(notRemovedArr);
    setCount(notRemovedArr?.length!);
    setFavoriteData(notRemovedArr);
  };

  const onToggleItem = (
    e: ChangeEvent<HTMLInputElement>,
    item: FavoriteItem,
    value: FavoriteItem[],
    setData: (v: FavoriteItem[]) => void
  ) => {
    const filterItem = map((x: FavoriteItem) => {
      if (x.id === item.id) x.checked = e.target.checked;
      else x;
      return x;
    }, value);
    console.log(filterItem);
    setData(filterItem);
  };

  const onCheckAllItem = (
    e: ChangeEvent<HTMLInputElement>,
    value: FavoriteItem[]
  ) => {
    const filterItem = map((x: FavoriteItem) => {
      x.checked = e.target.checked;
      return x;
    }, value);
    setData(filterItem);
  };

  const onRemoveItem = (
    id: number,
    setData: (v: FavoriteItem[]) => void,
    setCount: (count: number) => void,
    setFavoriteData: (v: FavoriteItem[]) => void,
    value: FavoriteItem[]
  ) => {
    const filterItem = filter((item: FavoriteItem) => item.id !== id, value);
    setData(filterItem);
    setCount(filterItem?.length!);
    setFavoriteData(filterItem);
  };

  const TableBodyContainer = (x: FavoriteItem) => {
    return (
      <Favorite.TableRow key={x.id}>
        <Favorite.TableCell>
          <Checkbox
            onChange={(e) => onToggleItem(e, x, data!, setData)}
            checked={x.checked}
            inputProps={{ "aria-label": `row-item-${x.id}` }}
          />
        </Favorite.TableCell>
        <Favorite.TableCell>
          <InfoItem items={x} />
        </Favorite.TableCell>
        <Favorite.TableCell>{x.base_price}</Favorite.TableCell>
        <Favorite.TableCell>
          <Button
            variant="outlined"
            onClick={() =>
              onRemoveItem(x.id!, setData, setCount, setFavoriteData, data!)
            }
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
            <Checkbox {...label} onChange={(e) => onCheckAllItem(e, data!)} />
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
      <Favorite.Button
        onClick={() => onRemoveItems(data!, setData, setCount, setFavoriteData)}
      >
        삭제하기
      </Favorite.Button>
    </div>
  );
};

export default FavoriteTable;
