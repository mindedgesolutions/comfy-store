import React from "react";
import { customFetch } from "../utils/functions";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]); // Get search parameters from URL
  try {
    const response = await customFetch.get("/products", { params: params });
    return { response, params };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Products = () => {
  const { response } = useLoaderData();
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
