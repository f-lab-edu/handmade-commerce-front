import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
