import _about_us from "@/components/_pages/About_Us/_about_us";

export default function About_Us() {
  return <_about_us />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "About Us | Tay Juhana Foundation",
    },
  };
}
