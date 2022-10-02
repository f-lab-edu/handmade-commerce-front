export interface ProductType {
  name: string;
  id: number;
  brand: string;
  category: number;
  detailImg: string[];
  mainImg: string;
  base_price: string;
  subCategory: number;
  discount_price: string;
}

export interface ProductListType {
  list: ProductType[];
  count: number;
}
