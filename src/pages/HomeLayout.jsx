import React from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
