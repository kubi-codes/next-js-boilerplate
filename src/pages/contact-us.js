import _contact_us from "@/components/_pages/Contact_Us/_contact_us";

export default function Contact_Us() {
  return <_contact_us />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Contact Us | Tay Juhana Foundation",
    },
  };
}
