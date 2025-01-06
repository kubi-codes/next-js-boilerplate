import React from "react";
import Navbar from "@/components/layouts/Navbar/_navbar";
import Footer from "@/components/layouts/Footer/_footer";

function _main({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default _main;
