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
  setCategory?: Dispatch<SetStateAction<string>>;
  subCategory: string;
  setSubCategory?: Dispatch<SetStateAction<string>>;
  keyword: string;
  setKeyword?: Dispatch<SetStateAction<string>>;
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
