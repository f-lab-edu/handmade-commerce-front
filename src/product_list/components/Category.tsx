import React from 'react'
import { css } from '@emotion/react'
import { category_list } from '../utils/category_list'
import CategoryItem from './CategoryItem'

const categoryStyle = css({
  width: 260,
})

const Category = () => {
  return (
    <nav css={categoryStyle}>
        <ul>
            {category_list.map(x => <CategoryItem key={x.id} name={x.name} link={x.link} />)}
        </ul>
    </nav>
  )
}

export default Category