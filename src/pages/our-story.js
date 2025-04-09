import _our_story from "@/components/_pages/Our_Story/_our_story";

export default function Our_Story() {
  return <_our_story />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Our Story | Tay Juhana Foundation",
      navbar: { disable: true },
      footer: { disable: true },
    },
  };
}
