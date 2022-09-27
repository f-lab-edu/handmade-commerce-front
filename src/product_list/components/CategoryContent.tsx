import React, { useState } from "react";
import { useCategory } from "../../hook/GlobalContext";
import { category_list } from "../data/category_list";
import SubCategory from "./SubCategory";

type Props = {};

const CategoryContent = (props: Props) => {
  const { category, subCategory } = useCategory();

  return (
    <SubCategory>
      {category_list[Number(category) - 1]?.subCategory?.map((x) => (
        <SubCategory.Item
          key={x?.id}
          category={category}
          subCategory={subCategory}
          id={x?.id}
        >
          {x?.name}
        </SubCategory.Item>
      ))}
    </SubCategory>
  );
};

export default CategoryContent;
