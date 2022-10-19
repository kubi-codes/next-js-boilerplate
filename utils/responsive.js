import styled from "@emotion/styled";

const useResponsive =
  process.env.NEXT_PUBLIC_USE_RESPONSIVE &&
  process.env.NEXT_PUBLIC_USE_RESPONSIVE?.toLocaleLowerCase() === "true";

const isForceMobile =
  process.env.NEXT_PUBLIC_USE_MOBILE_ONLY &&
  process.env.NEXT_PUBLIC_USE_MOBILE_ONLY?.toLocaleLowerCase() === "true";

export const AllDevice = isForceMobile
  ? styled.section`
      justify-content: center;
      display: flex;
      background-color: #f4f4f4;
      padding-top: 1vh;
      padding-bottom: 1vh;

      #root {
        max-width: 600px;
        width: 100%;
        min-height: 98vh;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius: 10px;
      }
    `
  : styled.section``;

export const DesktopWrapper = styled.section`
  display: ${useResponsive ? "none" : "inherit"};

  @media only screen and (min-width: 992px) {
    display: block;
    width: 100%;
  }
`;

export const TabletWrapper = styled.section`
  display: ${useResponsive ? "none" : "inherit"};

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: block;
    width: 100%;
  }
`;

export const MobileWrapper = styled.section`
  display: ${useResponsive ? "none" : "inherit"};

  @media only screen and (max-width: 760px) {
    display: block;
    width: 100%;
  }
`;
