import { getProductList } from "../../hook/product"
import { Query } from "../../hook/reactQuery"

// export const fetchProductList = async() => {
//   return await getProductList()
// }

// export const prefetchProductList = () => {
//     return Prefetch('product_list', getProductList)
// }
interface ProductItem {
  name: string
}
let mBook : ProductItem;
export const fetchProductList = () => {
   const res = Query('product_list', getProductList)
   console.log('===')
   console.log(res)
   console.log(res)
   return res
}