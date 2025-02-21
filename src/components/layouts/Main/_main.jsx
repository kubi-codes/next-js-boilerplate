import React from "react";
import Navbar from "@/components/layouts/Navbar/_navbar";
import NavbarTopic from "@/components/layouts/Navbar/_navbar.topic";
import NavbarResearch from "@/components/layouts/Navbar/_navbar.research";
import NavbarInitiatives from "@/components/layouts/Navbar/_navbar.initiatives";
import Footer from "@/components/layouts/Footer/_footer";
import { usePathname } from "next/navigation";

function _main({ children, ...props }) {
  const pathname = usePathname();
  const rootPathname = pathname?.split("/")?.[1];

  const RenderNavbar = () => {
    switch (rootPathname) {
      case "topic":
        return <NavbarTopic {...props?.navbar} />;

      case "research":
        return <NavbarResearch {...props?.navbar} />;

      case "initiatives":
        return <NavbarInitiatives {...props?.navbar} />;

      default:
        return <Navbar {...props?.navbar} />;
    }
  };

  return (
    <>
      <RenderNavbar />
      {children}
      <Footer />
    </>
  );
}

export default _main;
