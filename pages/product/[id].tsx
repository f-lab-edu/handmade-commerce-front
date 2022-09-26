import React, { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProductItem } from "../../src/product_item/remotes";
import Product from "../../src/product_item/component/Product";
import Image from "next/image";
import Layout from "../../src/shared/component/Layout";
import ProductInfo from "../../src/product_item/component/ProductInfo";
import { ProductType } from "../../src/product_list/interface";
import AutoHeightImage from "../../src/shared/component/AutoHeightImage";
import ProductImage from "../../src/product_item/component/ProductImage";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getProductItem, getProductList } from "../../src/hook/product";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

// export async function getServerSideProps(context: { query: { id: string } }) {
//   const { id } = context.query;
//   console.log(`query id: ${id}`);
//   return { props: { id } };
// }

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths = async () => {
  const { list } = await getProductList(0, "", true); // page, keyword, all
  console.log("====list====");
  console.log(typeof list[0].id);
  const paths = list?.map((x: ProductType) => {
    return {
      params: { id: x.id?.toString() },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  const { id } = context.params as IParams;
  console.log("===id===");
  console.log(id);
  await queryClient.prefetchQuery(["product"], () => getProductItem(id));
  // console.log(id);

  // const props = fetch(`/api/${id}`);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};

interface RouterProps {
  id: string;
}

const ProdouctItem = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [detailImgData, setDetailImgData] = useState<string[]>([""]);
  const { data, isLoading } = useProductItem(id);
  console.log("---");
  console.log(data);
  useEffect(() => {
    const imgArray: string[] = data?.detailImg?.split("||")!;
    console.log(imgArray);
    setDetailImgData(imgArray);
  }, [data]);

  return (
    <Layout>
      <Product>
        <Product.Head>
          <Product.HeadLeft>
            <ProductImage images={detailImgData} />
          </Product.HeadLeft>
          <Product.HeadRight>
            <ProductInfo
              name={data?.name}
              brand={data?.brand}
              base_price={data?.base_price}
            />
          </Product.HeadRight>
        </Product.Head>
        {/* <Product.Body>
          <ProductDetailImage images={data?.detailImg} />
        </Product.Body> */}
      </Product>
    </Layout>
  );
};

export default ProdouctItem;
