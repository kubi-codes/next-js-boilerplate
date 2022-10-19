import React from "react";
import Footer from "./Footer";
import * as Responsive from "utils/responsive";

function MainLayout(props) {
  return (
    <Responsive.AllDevice>
      <div id="root">
        <main>{props.children}</main>
        <Footer />
      </div>
    </Responsive.AllDevice>
  );
}

export default MainLayout;
