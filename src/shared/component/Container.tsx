import React from "react";
import Header from "../../header/components/Header";
import Logo from "../../header/components/Logo";
import { ChildrenProps } from "../interface/props";
import Layout from "./Layout";
const Container = ({ children }: ChildrenProps) => {
  return (
    <Layout>
      <Header />

      {children}
    </Layout>
  );
};

export default Container;
