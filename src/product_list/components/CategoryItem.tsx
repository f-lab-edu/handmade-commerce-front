import React from 'react'

interface Props {
    name: string,
    link: string
}

const CategoryItem = ({ name, link }: Props) => {
  return (
    <li>{name}</li>
  )
}

export default CategoryItem