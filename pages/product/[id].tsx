import React from "react";
import { useRouter } from "next/router";
type Props = {};

const Prodouct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default Prodouct;
