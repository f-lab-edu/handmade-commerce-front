import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import React, { Suspense } from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { ProductListType } from '../interface'
import { useProductList } from '../remotes'
import ListItem from './ListItem'
import Loading from '../../shared/component/Loading'
import { css } from '@emotion/react'
import List from './List'

const listStyle = css({
  maxWidth: 1600,
  width: '100%',
  marginRight: '3%',
  marginLeft: 30
})

const ListContent = () => {
  const {data, isLoading} = useProductList()
  if (isLoading) return <Loading />
  return (
    <List>
      <List.Content>
        {data?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)}
      </List.Content>
    </List>
  )
}

export default ListContent