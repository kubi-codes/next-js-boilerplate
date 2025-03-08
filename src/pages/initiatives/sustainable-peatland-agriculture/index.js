import _sustainable_peatland_agriculture from "@/components/_pages/Initiatives/Detail/Sustainable_Peatland_Agriculture/_sustainable_peatland_agriculture";

export default function SustainablePeatlandAgriculture() {
  return <_sustainable_peatland_agriculture />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Sustainable Peatland Agriculture | Tay Juhana Foundation`,
    },
  };
}
