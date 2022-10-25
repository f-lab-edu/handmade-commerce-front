import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../shared/interface/props";

interface IFavoriteContext {
  count: number | undefined;
  setCount: (count: number) => void | undefined;
}

export const FavoriteContext = createContext<IFavoriteContext | null>({
  count: 0,
  setCount: () => {},
});

export const useFavoriteContext = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw Error("Context has not been Provided! ");
  return ctx;
};

export const FavoriteProvider = ({ children }: ChildrenProps) => {
  const [count, setCount] = useState<number | undefined>();

  return (
    <FavoriteContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
