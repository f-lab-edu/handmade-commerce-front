import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ChildrenProps } from "../shared/interface/props";

interface IGlobalContext {
  category: string;
  setCategory?: any;
  subCategory: string;
  setSubCategory?: any;
  keyword: string;
  setKeyword?: any;
}

export const GlobalContext = createContext<IGlobalContext>({
  category: "1",
  subCategory: "1",
  keyword: "",
});

export const useHeader = () => useContext(GlobalContext);

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState("1");
  const [subCategory, setSubCategory] = useState("1");
  const [keyword, setKeyword] = useState("");

  return (
    <GlobalContext.Provider
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
    </GlobalContext.Provider>
  );
};
