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

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  console.log(`query id: ${id}`);
  return { props: { id } };
}

interface RouterProps {
  id: string;
}

const ProdouctItem = ({ id }: RouterProps) => {
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
          <ProductDetailImage images={detailImgData} />
        </Product.Body> */}
      </Product>
    </Layout>
  );
};

export default ProdouctItem;
