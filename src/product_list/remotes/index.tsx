import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProductList } from "../../hook/product";
import { ProductListType } from "../interface";

const queryClient = new QueryClient();
export const getPrefetchList = () => {
  queryClient.prefetchQuery(["product_list"], () => getProductList(0));
};

export const useProductList = (page: number = 0) => {
  console.log(page);
  return useQuery<ProductListType, AxiosError>(
    ["product_list", page],
    () => getProductList(page),
    { suspense: true }
  );
};
