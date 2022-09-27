import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCategory } from "../../hook/GlobalContext";
import { getProductList } from "../../hook/product";
import { ProductListType } from "../interface";

// const queryClient = new QueryClient();
// export const getPrefetchList = () => {
//   queryClient.prefetchQuery(["product_list"], () => getProductList(0));
// };

interface Props {
  page: number;
  keyword?: string;
}

export const useProductList = ({ page, keyword }: Props) => {
  const { subCategory, category } = useCategory();
  return useQuery<ProductListType, AxiosError>(
    ["product_list", { page, category, subCategory }],
    () => getProductList({ page, keyword, category, subCategory })
  );
};
