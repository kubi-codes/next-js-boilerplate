import _research_detail from "@/components/_pages/Research/Detail/_research_detail";

export default function ResearchDetail() {
  return <_research_detail />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Publication | Tay Juhana Foundation`,

      navbar: {
        color: "#233E83",
        bgColor: "white",
        disableElevation: true,
      },
    },
  };
}
