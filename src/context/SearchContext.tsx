import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../shared/interface/props";

interface ISearchContext {
  category: string | undefined;
  setCategory: (count: string) => void;
  subCategory: string | undefined;
  setSubCategory: (count: string) => void;
  keyword: string | undefined;
  setKeyword: (count: string) => void;
}

export const SearchContext = createContext<ISearchContext | null>(null);

export const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("Provider 하위에서 사용해주세요");
  }
  return ctx;
};

export const SearchProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState<string | undefined>();
  const [subCategory, setSubCategory] = useState<string | undefined>();
  const [keyword, setKeyword] = useState<string | undefined>();

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
