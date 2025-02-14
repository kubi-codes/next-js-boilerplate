import _updates from "@/components/_pages/Updates/_updates";

export default function Updates() {
  return <_updates />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Updates | Tay Juhana Foundation",
    },
  };
}
