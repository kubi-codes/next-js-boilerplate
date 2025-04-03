import _updates_detail from "@/components/_pages/Updates/Detail/_updates_detail";

export default function UpdateDetails() {
  return <_updates_detail />;
}

export async function getServerSideProps(props) {
  const capitalize = (str) => {
    return str
      .split("-") // Pisahkan slug berdasarkan "-"
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi setiap kata
      .join(" "); // Gabungkan kembali dengan spasi
  };

  const title = props.query?.id
    ? `${capitalize(props.query.id)} | Tay Juhana Foundation`
    : "Topic | Tay Juhana Foundation";

  return {
    props: {
      title: `${title} | Tay Juhana Foundation`,
      navbar: {
        color: "#233E83",
        bgColor: "white",
        disableElevation: true,
      },
    },
  };
}
