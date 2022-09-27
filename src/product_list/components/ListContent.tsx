import { ProductType } from "../interface";
import { useProductList } from "../remotes";
import ListItem from "./ListItem";
import List from "./List";
import Search from "../../search/component/Search";
import { Pagination } from "@mui/material";
import React, { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCategory } from "../../hook/GlobalContext";

const ListContent = () => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { category, setCategory, setSubCategory } = useCategory();
  const { data } = useProductList({
    page,
    keyword,
  });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const categoryQ: string = router.query.category as string;
    const subCategoryQ: string = router.query.subCategory as string;
    setCategory(categoryQ ? categoryQ : "1");
    setSubCategory(subCategoryQ ? subCategoryQ : "1");
    setPage(1);
  }, [router.isReady, router.query, setCategory, setSubCategory]);

  const onHandlePage = (eventPage: number) => {
    console.log(eventPage);
    setPage(eventPage);
  };

  return (
    <List>
      {/* <Search setKeyword={setKeyword} setEnabledButton={setEnabledButton} /> */}
      <List.Content>
        {data?.list?.map((x: ProductType) => (
          <ListItem key={x.id} value={x} />
        ))}
      </List.Content>
      <Pagination
        onChange={(e, page) => onHandlePage(page)}
        page={page}
        count={data?.count}
        showFirstButton
        showLastButton
      />
    </List>
  );
};

export default ListContent;
