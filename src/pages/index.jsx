import Head from "next/head";
import Seo from "@/components/globals/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" url="" />
      <main>
        <h1>Test</h1>
      </main>
    </>
  );
}

// Page Config
// Home.disabledLayout = true;

export async function getServerSideProps(context) {
  const endpoints = [];

  // Return our response in the allData variable as an array
  const data = await Promise.all(
    endpoints.map((endpoint) => http.get(endpoint))
  ).then(([]) => ({}));

  return {
    props: {
      title: "Home",
      url: context?.resolvedUrl,
      data,
    }, // will be passed to the page component as props
  };
}
