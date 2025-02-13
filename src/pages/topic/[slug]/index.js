import _topic_detail from "@/components/_pages/Topic/Detail/_topic_detail";

export default function Topic() {
  return <_topic_detail />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Detail | Tay Juhana Foundation",
    },
  };
}
