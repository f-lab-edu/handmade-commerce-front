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
}

export const GlobalContext = createContext<IGlobalContext>({
  category: "1",
  subCategory: "1",
});

export const useCategory = () => useContext(GlobalContext);

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState("1");
  const [subCategory, setSubCategory] = useState("1");

  return (
    <GlobalContext.Provider
      value={{ category, setCategory, subCategory, setSubCategory }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
