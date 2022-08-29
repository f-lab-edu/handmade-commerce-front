import Image from 'next/image'
import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { list_css } from '../styles/list_css'

interface Props {
    
}

const ListItem = (props: Props) => {
  return (
    <div css={list_css.item}>
      <Image src='https://img.29cm.co.kr/next-product/2022/02/22/4ea7a6af55ab453c9456516ba580fb8b_20220222163458.jpg?width=500' width={300} height={300} alt='thumbnail' />
      <div css={flex_css.flex_column}>
        <span>하나</span>
        <span>하나</span>
        <span>하나</span>
      </div>
    </div>
  )
}

export default ListItem