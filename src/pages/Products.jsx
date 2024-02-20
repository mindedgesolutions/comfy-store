import React from "react";
import { customFetch } from "../utils/functions";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await customFetch.get("/products");
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Products = () => {
  const response = useLoaderData();
  const products = response.data.data;
  const meta = response.data.meta;

  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
