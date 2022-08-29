import { QueryClient, useQuery } from "@tanstack/react-query";
import { getProductList } from "../../hook/product"

const queryClient = new QueryClient()
export const usePrefetchList = () => {
  queryClient.prefetchQuery(['product_list'], getProductList)
}

export const useProductList = () => {
   return useQuery(['product_list'], getProductList)
}

