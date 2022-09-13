import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProductList } from "../../hook/product"
import { ProductListType } from "../interface";

const queryClient = new QueryClient()
export const usePrefetchList = () => {
  queryClient.prefetchQuery(['product_list'], getProductList)
}

export const useProductList = () => {
   return useQuery<ProductListType[], AxiosError>(['product_list'], getProductList, {suspense: true})
}

