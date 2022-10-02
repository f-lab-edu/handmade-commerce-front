import React, { SetStateAction, useEffect, useState } from "react";
import { useProductItem } from "../../src/product_item/remotes";
import Product from "../../src/product_item/component/Product";
import Image from "next/image";
import Layout from "../../src/shared/component/Layout";
import ProductInfo from "../../src/product_item/component/ProductInfo";
import { ProductType } from "../../src/product_list/interface";
import AutoHeightImage from "../../src/shared/component/AutoHeightImage";
import ProductImage from "../../src/product_item/component/ProductImage";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getProductItem, getAllList } from "../../src/hook/product";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Container from "../../src/shared/component/Container";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths = async () => {
  const { list } = await getAllList(); // page, keyword, all
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};

const ProdouctItem = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [detailImgData, setDetailImgData] = useState<string[]>([""]);
  const { data, isLoading, isSuccess } = useProductItem(id);

  if (!isSuccess) return;

  // useEffect(() => {
  //   const imgArray: string[] = data?.detailImg?.split("||")!;
  //   console.log(imgArray);
  //   setDetailImgData(imgArray);
  // }, [data]);

  return (
    <Container>
      <Product>
        <Product.Head>
          <Product.HeadLeft>
            <ProductImage images={data.detailImg} />
          </Product.HeadLeft>
          <Product.HeadRight>
            <ProductInfo
              name={data.name}
              brand={data.brand}
              base_price={data.base_price}
              id={0}
              category={0}
              detailImg={[]}
              mainImg={""}
              subCategory={0}
              discount_price={""}
            />
          </Product.HeadRight>
        </Product.Head>
        {/* <Product.Body>
          <ProductDetailImage images={data?.detailImg} />
        </Product.Body> */}
      </Product>
    </Container>
  );
};

export default ProdouctItem;
