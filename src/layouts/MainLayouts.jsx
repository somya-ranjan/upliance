import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

function MainLayouts({ isAuthenticated }) {
  return (
    <>
      {isAuthenticated ? (
        <>
          <NavBar />
          <Outlet />
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}

export default memo(MainLayouts);
