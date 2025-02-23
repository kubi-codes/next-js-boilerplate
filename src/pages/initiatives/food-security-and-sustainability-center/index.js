import _food_security_and_sustainability_center from "@/components/_pages/Initiatives/Detail/Food_Security_Sustainability_Center/_food_security_sustainability_center";

export default function Collabowritting() {
  return <_food_security_and_sustainability_center />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Food Security and Sustainability Center | Tay Juhana Foundation`,
    },
  };
}
