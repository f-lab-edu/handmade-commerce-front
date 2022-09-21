import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProductList } from "../../hook/product";
import { ProductListType } from "../interface";

const queryClient = new QueryClient();
export const getPrefetchList = () => {
  queryClient.prefetchQuery(["product_list"], () => getProductList(0));
};

export const useProductList = (
  page: number = 1,
  keyword: string = "",
  enabledButton: boolean
) => {
  console.log(page, keyword);
  return useQuery<ProductListType, AxiosError>(
    ["product_list", { page, enabledButton }],
    () => getProductList(page, keyword)
  );
};
