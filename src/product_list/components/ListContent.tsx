import { ProductType } from "../interface";
import { useProductList } from "../remotes";
import ListItem from "./ListItem";
import List from "./List";
import Search from "../../search/component/Search";
import { Pagination } from "@mui/material";
import React, { useState } from "react";

const ListContent = () => {
  const [page, setPage] = useState(0);
  const { data } = useProductList(page);

  const onHandlePage = (eventPage: number) => {
    console.log(eventPage);
    setPage(eventPage);
  };

  return (
    <List>
      <Search />
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
