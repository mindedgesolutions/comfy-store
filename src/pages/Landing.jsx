import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/functions";

const url = "/products?featured=true";

export const loader = async () => {
  try {
    const response = await customFetch.get(url);
    return { response };
  } catch (error) {
    return error?.response?.data?.msg;
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
