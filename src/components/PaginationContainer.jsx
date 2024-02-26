import React from "react";
import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
  const { response } = useLoaderData();
  const { pageCount, page } = response.data.meta;

  return <div>PaginationContainer</div>;
};

export default PaginationContainer;
