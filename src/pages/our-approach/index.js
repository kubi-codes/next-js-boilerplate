import React from "react";
import _our_approach from "@/components/_pages/Our_Approach/_our_approach";

export default function Index() {
  return <_our_approach />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Our Approach | Tay Juhana Foundation",
      navbar: {
        color: "#fff",
        logo: "/images/TJF-White-logo.png",
        bgColor: "transparent",
        disableElevation: true,
      },
    },
  };
}
