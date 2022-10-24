import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../shared/interface/props";

interface IFavoriteContext {
  count: number | undefined;
  setCount: (count: number) => void;
}

export const FavoriteContext = createContext<IFavoriteContext | null>(null);

export const useFavoriteContext = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error("Provider 하위에서 사용해주세요");
  }
  return ctx;
};

export const FavoriteProvider = ({ children }: ChildrenProps) => {
  const [count, setCount] = useState<number | undefined>(0);

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
