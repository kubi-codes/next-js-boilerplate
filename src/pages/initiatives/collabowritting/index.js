import _collabowritting from "@/components/_pages/Initiatives/Detail/Collabowritting/_collabowritting";

export default function Collabowritting() {
  return <_collabowritting />;
}

export async function getServerSideProps(props) {
  return {
    props: {
      title: `Collabowritting | Tay Juhana Foundation`,
    },
  };
}
