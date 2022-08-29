import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { flex_css } from '../shared/styles/shared'
import Category from '../src/product_list/components/Category'
import List from '../src/product_list/components/List'
import styles from '../styles/Home.module.css'
import { fetchProductList } from '../src/product_list/remotes'
import { prefetch } from '../src/hook/reactQuery'
import { getProductList } from '../src/hook/product'

const Home: NextPage = () => {
  prefetch('product_list', fetchProductList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={flex_css.flex_row}>
        <Category />
        <List />
      </main>
    </div>
  )
}

export default Home