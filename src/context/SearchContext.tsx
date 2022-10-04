import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ChildrenProps } from "../shared/interface/props";

interface ISearchContext {
  category: string;
  setCategory?: any;
  subCategory: string;
  setSubCategory?: any;
  keyword: string;
  setKeyword?: any;
}

export const SearchContext = createContext<ISearchContext>({
  category: "1",
  subCategory: "1",
  keyword: "",
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState("1");
  const [subCategory, setSubCategory] = useState("1");
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContext.Provider
      value={{
        category,
        setCategory,
        subCategory,
        setSubCategory,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
