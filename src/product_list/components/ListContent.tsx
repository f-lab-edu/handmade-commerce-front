import React from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { list_css } from '../styles/list_css'
import ListItem from './ListItem'

type Props = {}

const ListContent = (props: Props) => {
  return (
    <section css={[list_css.container, flex_css.flex_row, flex_css.flex_wrap]}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />  
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </section>
  )
}

export default ListContent