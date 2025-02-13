import _research from "@/components/_pages/Research/_research";

export default function Research() {
  return <_research />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Research | Tay Juhana Foundation",
    },
  };
}
