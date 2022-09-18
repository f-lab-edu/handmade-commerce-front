import React, { useState } from 'react'
import { category_list } from '../utils/category_list'
import Category from './Category'

type Props = {}

const CategoryContent = (props: Props) => {
  return (
    <Category>
        {category_list.map(x => <Category.Item key={x.id}>{x.name}</Category.Item>)}
    </Category>
  )
}

export default CategoryContent