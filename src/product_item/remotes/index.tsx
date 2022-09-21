import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProductItem } from "../../hook/product";
import { ProductType } from "../../product_list/interface";

export const useProductItem = (productId: string) => {
  console.log(productId);
  return useQuery<ProductType, AxiosError>(["product", productId], () =>
    getProductItem(productId)
  );
};
