import http from "@/utils/http";
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

export async function getStaticProps(context) {
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
