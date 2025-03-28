import _home from "@/components/_pages/Home/_home";

export default function Home() {
  return <_home />;
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Home | Tay Juhana Foundation",
      seo: {
        image: "https://metatags.io/images/meta-tags.png",
        en: {
          desc: `Tay Juhana Foundation (TJF) is a nonprofit organization dedicated to advocate the conversion and cultivation of suboptimal lands into productive lands, through the most environmentally, economically, and socially sustainable manner. `,
          url: "https://tayjuhanafoundation.org",
        },
        id: {
          desc: `Tay Juhana Foundation (TJF) is a nonprofit organization dedicated to advocate the conversion and cultivation of suboptimal lands into productive lands, through the most environmentally, economically, and socially sustainable manner. `,
          url: "https://tayjuhanafoundation.org",
        },
      },
    },
  };
}
