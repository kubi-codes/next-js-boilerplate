import _career_detail from "@/components/_pages/Career/Detail/_career.detail";

export default function CareerDetail() {
  return <_career_detail />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Career | Tay Juhana Foundation",
      navbar: {
        color: "#233E83",
        bgColor: "white",
        disableElevation: true,
      },
    },
  };
}
