import React from "react";
import * as Device from "./device";
import * as Responsive from "utils/responsive";

function Index() {
  return (
    <>
      <Responsive.DesktopWrapper>
        <Device.Desktop />
      </Responsive.DesktopWrapper>

      <Responsive.TabletWrapper>
        <Device.Tablet />
      </Responsive.TabletWrapper>

      <Responsive.MobileWrapper>
        <Device.Mobile />
      </Responsive.MobileWrapper>
    </>
  );
}

export default Index;
