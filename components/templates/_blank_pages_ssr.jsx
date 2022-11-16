import React from "react";
import Blank from "components/templates/_blank/index";
import http from "utils/http";

export default function TermsAndConditions(props) {
  // example for call redux

  return (
    <div>
      <Blank />
    </div>
  );
}

export async function getServerSideProps(context) {
  const endpoints = [`/wp-json/wp/v2/pages`, `/wp-json/wp/v2/pages`];

  // Return our response in the allData variable as an array
  const data = await Promise.all(
    endpoints.map((endpoint) => http.get(endpoint))
  ).then(([{ data: page }, { data: navigation }]) => ({
    page,
    navigation,
  }));

  return {
    props: {
      request: data,
      title: "Terms and conditions",
    }, // will be passed to the page component as props
  };
}
