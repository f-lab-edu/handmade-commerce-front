import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  KeyboardEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button, css, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { flex_css } from "../../../shared/styles/shared";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Link from "next/link";

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

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onKeyEnter = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/",
        query: { keyword: inputValue },
      });
    }
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
        inputProps={{
          "aria-label": "searchInput",
        }}
        onKeyDown={onKeyEnter}
      />
      <Link
        href={{
          pathname: "/",
          query: { keyword: inputValue },
        }}
      >
        {/* <button>asdf</button> */}
        <IconButton
          disabled={inputValue.length < 1}
          component="label"
          aria-label="searchBtn"
        >
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default Search;
