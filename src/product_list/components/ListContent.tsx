import { ProductType } from "../interface";
import { useProductList } from "../remotes";
import ListItem from "./ListItem";
import List from "./List";
import { Pagination } from "@mui/material";
import React, { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchContext } from "../../context/SearchContext";
import NotFound from "./NotFound";

const ListContent = () => {
  const [page, setPage] = useState(1);
  const { category, setCategory, setSubCategory, setKeyword } =
    useSearchContext();
  const { data } = useProductList({
    page,
  });
  const router = useRouter();

  useEffect(() => {
    if (!router?.isReady) return;
    const categoryQ = router.query.category as string;
    const subCategoryQ = router.query.subCategory as string;
    const keywordQ = router.query.keyword as string;
    if (keywordQ) {
      if (setKeyword) setKeyword(keywordQ);
      if (setCategory) setCategory("0");
    } else {
      if (setCategory) setCategory(categoryQ ? categoryQ : "1");
      if (setSubCategory) setSubCategory(subCategoryQ ? subCategoryQ : "1");
      if (setKeyword) setKeyword("");
    }
    setPage(1);
  }, [router.isReady, router.query, setCategory, setKeyword, setSubCategory]);

  const onHandlePage = (eventPage: number) => {
    console.log(eventPage);
    setPage(eventPage);
  };

  return (
    <List>
      <List.Content>
        {data?.list?.length! > 0 ? (
          data?.list?.map((x: ProductType) => <ListItem key={x.id} value={x} />)
        ) : (
          <NotFound />
        )}
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
