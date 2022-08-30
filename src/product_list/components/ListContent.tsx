import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import React, { Suspense } from 'react'
import { flex_css } from '../../../shared/styles/shared'
import { ProductListType } from '../interface'
import { useProductList } from '../remotes'
import { list_css } from '../styles/list_css'
import ListItem from './ListItem'
import Loading from '../../shared/component/Loading'

const ListContent = () => {
  const {data, isLoading} = useProductList()
  if (isLoading) return <Loading />
  return (
    <section css={[list_css.container, flex_css.flex_row, flex_css.flex_wrap]}>
      {data?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)}
    </section>
  )
}

export default ListContent