import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { ProductListType } from '../interface'
import List from './List'

interface Props {
    value: ProductListType
}

const ListItem = ({value}: Props) => {
  return (
    <List.Item>
      <Image src={value?.mainImg || ''} width={300} height={300} alt='thumbnail' layout='responsive' priority/>
      <List.Info>
        <List.InfoText>{value.brand}</List.InfoText>
        <List.InfoText>{value.name}</List.InfoText>
        <List.InfoText>{value.base_price}</List.InfoText>
      </List.Info>
    </List.Item>
  )
}

export default ListItem