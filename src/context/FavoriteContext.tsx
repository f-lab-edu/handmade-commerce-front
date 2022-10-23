import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ChildrenProps } from "../shared/interface/props";

interface IFavoriteContext {
  count: number;
  setCount?: Dispatch<SetStateAction<number>>;
}

export const FavoriteContext = createContext<IFavoriteContext>({
  count: 0,
});

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }: ChildrenProps) => {
  const [count, setCount] = useState(0);

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
