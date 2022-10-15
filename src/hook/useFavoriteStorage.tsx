import { ProductType } from "../product_list/interface";
import { useLocalStorage } from "./useLocalStorage";
interface FavItem extends ProductType {
  checked: boolean;
}
const defaultData: FavItem[] = [];

export const useFavoriteItem = () => {
  const [favoriteData, setFavoriteData] = useLocalStorage(
    "favorite",
    defaultData
  );
  return [favoriteData, setFavoriteData] as const;
};
