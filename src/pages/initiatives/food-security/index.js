import _food_security from "@/components/_pages/Initiatives/Detail/Food_Security/_food_security";

export default function FoodSecurity() {
  return <_food_security />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Food Security | Tay Juhana Foundation`,
    },
  };
}
