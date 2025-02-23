import _suboptimal_land_agricultutre_initiatives from "@/components/_pages/Initiatives/Detail/Suboptimal_Land_Agricultutre_Initiatives/_suboptimal_land_agricultutre_initiatives";

export default function SuboptimalLandAgricultureInitiatives() {
  return <_suboptimal_land_agricultutre_initiatives />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Suboptimal Land Agricultutre Initiatives | Tay Juhana Foundation`,
    },
  };
}
