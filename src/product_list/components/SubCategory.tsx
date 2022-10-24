import React from "react";
import { css } from "@emotion/react";
import { ChildrenProps } from "../../shared/interface/props";
import Link from "next/link";

const subCategory_css = {
  container: css({
    width: 260,
  }),
  item: css({
    listStyle: "none",
    fontSize: 20,
  }),
};

const SubCategory = ({ children }: ChildrenProps) => {
  return (
    <nav css={subCategory_css.container}>
      <ul>{children}</ul>
    </nav>
  );
};

interface Props extends ChildrenProps {
  category: string | undefined;
  subCategory: string | undefined;
  id: number;
}

const Item = ({ children, subCategory, category, id }: Props) => {
  const selected = id === Number(subCategory);
  const selectedItem = css({
    color: selected ? "orange" : "black",
    fontWeight: selected ? "bold" : "normal",
    fontSize: 24,
    fontStyle: selected ? "oblique" : "normal",
  });
  return (
    <li css={[subCategory_css.item, selectedItem]}>
      <Link href={`?category=${category}&subCategory=${id}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

SubCategory.Item = Item;

export default SubCategory;
