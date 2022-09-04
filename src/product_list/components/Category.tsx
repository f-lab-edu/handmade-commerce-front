import React from 'react'
import { css } from '@emotion/react'
import { ChildrenProps } from '../../shared/interface/props'

const categoryStyle = css({
  width: 260,
})

const Category = ({children}: ChildrenProps) => {
  return (
    <nav css={categoryStyle}>
        <ul>
            {children}
        </ul>
    </nav>
  )
}

const Item = ({children}: ChildrenProps) => {
  return (
    <li>{children}</li>
  )
}

Category.Item = Item

export default Category