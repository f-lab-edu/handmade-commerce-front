import React, { Dispatch, SetStateAction, useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  setKeyword: Dispatch<SetStateAction<string>>;
  setEnabledButton: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ setKeyword, setEnabledButton }: Props) => {
  const onHandleKeyword = (e: any) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const onClick = () => {
    setEnabledButton(false);
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
      <button onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
