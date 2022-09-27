import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { css, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { flex_css } from "../../../shared/styles/shared";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const search_css = {
  container: css({
    marginBottom: 20,
  }),
  input: css({
    width: 300,
    color: "pink",
  }),
};

const Search = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (e: any) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div css={[search_css.container, flex_css.flex_center]}>
      <TextField
        css={search_css.input}
        id="standard-search"
        type="search"
        variant="standard"
        value={inputValue}
        onChange={onHandleChange}
      />
      <Link
        href={{
          pathname: "/",
          query: { keyword: inputValue },
        }}
      >
        <IconButton disabled={inputValue.length < 1} component="label">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default Search;
