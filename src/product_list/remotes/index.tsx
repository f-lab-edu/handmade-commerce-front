import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useHeader } from "../../hook/GlobalContext";
import { getProductList } from "../../hook/product";
import { ProductListType } from "../interface";

// const queryClient = new QueryClient();
// export const getPrefetchList = () => {
//   queryClient.prefetchQuery(["product_list"], () => getProductList(0));
// };

interface Props {
  page: number;
}

export const useProductList = ({ page }: Props) => {
  const { subCategory, category, keyword } = useHeader();
  return useQuery<ProductListType, AxiosError>(
    ["product_list", { page, category, subCategory, keyword }],
    () => getProductList({ page, keyword, category, subCategory })
  );
};
