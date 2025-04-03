import _magazine from "@/components/_pages/Magazine/_magazine";

export default function Magazine() {
  return <_magazine />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Magazine | Tay Juhana Foundation",
      navbar: {
        color: "#233E83",
        bgColor: "white",
        disableElevation: true,
      },
    },
  };
}
