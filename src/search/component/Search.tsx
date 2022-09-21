import React, { Dispatch, SetStateAction, useState } from "react";
import { css, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  setKeyword: Dispatch<SetStateAction<string>>;
  setEnabledButton: Dispatch<SetStateAction<boolean>>;
}

const search_css = {
  input: css({
    width: 400,
    borderWidth: 0,
    borderBottomWidth: 3,
  }),
  button: css({
    background: "white",
    borderWidth: 0,
  }),
};

const Search = ({ setKeyword, setEnabledButton }: Props) => {
  const onHandleKeyword = (e: any) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const onClick = () => {
    console.log("click");
    setEnabledButton(true);
  };

  return (
    <div>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        onChange={onHandleKeyword}
      />
      {/* <input css={search_css.input} onChange={onHandleKeyword} /> */}
      <button onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
