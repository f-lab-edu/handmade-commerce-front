import React from 'react'
import { category_list } from '../utils/category_list'
import CategoryItem from './CategoryItem'
import { category_css } from '../styles/list_css'

const Category = () => {
  return (
    <nav css={category_css.container}>
        <ul>
            {category_list.map(x => <CategoryItem key={x.id} name={x.name} link={x.link} />)}
        </ul>
    </nav>
  )
}

export default Category