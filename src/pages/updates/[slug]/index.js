import _updates_detail from "@/components/_pages/Updates/Detail/_updates_detail";

export default function UpdateDetails() {
  return <_updates_detail />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Updates | Tay Juhana Foundation",
    },
  };
}
