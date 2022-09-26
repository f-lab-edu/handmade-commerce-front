import React, { Dispatch, SetStateAction, useState } from "react";
import { css, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { flex_css } from "../../../shared/styles/shared";

interface Props {}

const search_css = {
  input: css({
    width: 300,
    color: "pink",
  }),
};

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [clicked, setClicked] = useState(false);

  const onHandleKeyword = (e: any) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const onClick = () => {
    console.log("click");
    setClicked(true);
  };

  return (
    <div css={flex_css.flex_center}>
      <TextField
        css={search_css.input}
        id="standard-search"
        type="search"
        variant="standard"
        onChange={onHandleKeyword}
      />
      {/* <input css={search_css.input} onChange={onHandleKeyword} /> */}
      <IconButton component="label">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
