import _career from "@/components/_pages/Career/_career";

export default function Career() {
  return <_career />;
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
