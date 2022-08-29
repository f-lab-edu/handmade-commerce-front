import { UseQueryResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { fetchProductList } from '../remotes'
import { list_css } from '../styles/list_css'
import ListItem from './ListItem'

interface ProductItem {
  name: string
}

interface QueryData {
  data: Array<ProductItem>
}



const ListContent = () => {
  const data:any= fetchProductList()
  console.log('>>>>>>>')
  console.log(data.data)
  return (
    <section css={[list_css.container, flex_css.flex_row, flex_css.flex_wrap]}>
      {/* {data.map((x: ProductItem)=><ListItem key={1} />)} */}
      {data?.data?.map((x: ProductItem, i:number)=>{return (<p key={i}>{x.name}</p>)})}
        
    </section>
  )
}

export default ListContent