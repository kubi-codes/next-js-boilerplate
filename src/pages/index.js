import _home from "@/components/_pages/Home/_home";

export default function Home() {
  return <_home />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Home | Tay Juhana Foundation",
    },
  };
}
