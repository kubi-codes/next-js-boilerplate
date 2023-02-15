import React from "react";
import * as Device from "./device";
import * as Responsive from "@/utils/responsive";
import useMediaQuery from "@mui/material/useMediaQuery";

function Index() {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <>
      <Responsive.SeoWrapper>
        <Device.Seo />
      </Responsive.SeoWrapper>

      {isDesktop && (
        <Responsive.DesktopWrapper>
          <Device.Desktop />
        </Responsive.DesktopWrapper>
      )}

      {isTablet && (
        <Responsive.TabletWrapper>
          <Device.Tablet />
        </Responsive.TabletWrapper>
      )}

      {isMobile && (
        <Responsive.MobileWrapper>
          <Device.Mobile />
        </Responsive.MobileWrapper>
      )}
    </>
  );
}

export default Index;
