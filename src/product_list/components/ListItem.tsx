import Image from 'next/image'
import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { ProductListType } from '../interface'
import { list_css } from '../styles/list_css'

interface Props {
    value: ProductListType
}

const ListItem = ({value}: Props) => {
  return (
    <div css={list_css.item}>
      <Image src={value?.mainImg || ''} width={300} height={300} alt='thumbnail' layout='responsive' priority/>
      <div css={flex_css.flex_column}>
        <span>{value.brand}</span>
        <span>{value.name}</span>
        <span>{value.price}</span>
      </div>
    </div>
  )
}

export default ListItem