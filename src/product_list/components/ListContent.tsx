import { ProductType } from "../interface";
import { useProductList } from "../remotes";
import ListItem from "./ListItem";
import List from "./List";
import Search from "../../search/component/Search";
import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const ListContent = () => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [enabledButton, setEnabledButton] = useState(false);
  const { data } = useProductList(page, keyword, enabledButton);

  const onHandlePage = (eventPage: number) => {
    console.log(eventPage);
    setPage(eventPage);
  };

  useEffect(() => {
    console.log(enabledButton);
  }, [enabledButton]);

  return (
    <List>
      <Search setKeyword={setKeyword} setEnabledButton={setEnabledButton} />
      <List.Content>
        {data?.list?.map((x: ProductType) => (
          <ListItem key={x.id} value={x} />
        ))}
      </List.Content>
      <Pagination
        onChange={(e, page) => onHandlePage(page)}
        count={data?.count}
        showFirstButton
        showLastButton
      />
    </List>
  );
};

export default ListContent;
