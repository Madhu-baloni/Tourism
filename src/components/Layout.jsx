import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Navbar />
      <Box sx ={{minHeight : "50rem",mt:"3.5rem"}}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
