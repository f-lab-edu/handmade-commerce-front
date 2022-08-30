import React from 'react'
import { flex_css, width100 } from '../../../shared/styles/shared'
import { list_css } from '../styles/list_css'
import ListContent from './ListContent'

const List = () => {
  return (
    <main css={[width100, flex_css.flex_center]}>
      <ListContent />
    </main>
  )
}

export default List