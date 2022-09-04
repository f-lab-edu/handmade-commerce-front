import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { ProductListType } from '../interface'

interface Props {
    value: ProductListType
}

const listItemStyle = css({
  width: 200,
  marginRight: 30
})

const ListItem = ({value}: Props) => {
  return (
    <li css={listItemStyle}>
      <Image src={value?.mainImg || ''} width={300} height={300} alt='thumbnail' layout='responsive' priority/>
      <div css={flex_css.flex_column}>
        <span>{value.brand}</span>
        <span>{value.name}</span>
        <span>{value.base_price}</span>
      </div>
    </li>
  )
}

export default ListItem