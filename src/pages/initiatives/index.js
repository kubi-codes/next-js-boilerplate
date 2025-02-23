import _initiatives from "@/components/_pages/Initiatives/_initiatives";

export default function Initiatives() {
  return <_initiatives />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Initiatives | Tay Juhana Foundation",
    },
  };
}
