import _topic from "@/components/_pages/Topic/_topic";

export default function Topic() {
  return <_topic />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Topic | Tay Juhana Foundation",
    },
  };
}
