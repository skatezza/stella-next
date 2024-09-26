import { getI18n } from "@/locale/server";

export type Project = {
  link: string;
  title: string;
  date: string;
  tags: string[];
  thumbnail: string;
  description: string;
};

export async function getProjects() {
  const t = await getI18n();

  return [
    {
      link: "https://fireterminator.ca/",
      title: "Fire Terminator",
      date: "2024-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/fireterminator.png",
      description: t("projects.fireterminator"),
    },
    {
      link: "https://clickmtl.vercel.app/",
      title: "CLICK",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/click.png",
      description: t("projects.clickmtl"),
    },
    {
      link: "https://voolta.vercel.app/",
      title: "Voolta",
      date: "2023-03-01",
      tags: ["Web App", "Landing Pages"],
      thumbnail: "/images/work/voolta.jpeg",
      description: t("projects.voolta"),
    },
    {
      link: "https://www.sockdatingsim.com/",
      title: "Sock Dating Sim",
      date: "2023-03-01",
      tags: ["Web App", "Landing Pages"],
      thumbnail: "/images/work/sockdatingsim.png",
      description: t("projects.sockdatingsim"),
    },
    {
      link: "https://www.immovia.ca/",
      title: "Immovia",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/immovia.png",
      description: t("projects.immovia"),
    },
    {
      link: "https://www.boxingclubcroixrousse.fr",
      title: "Boxing Club Croix Rousse",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/boxingclub.png",
      description: t("projects.boxingclub"),
    },
    {
      link: "https://alter-go.vercel.app/",
      title: "Alter&Go",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/alter&go.png",
      description: t("projects.alteretgo"),
    },
    {
      link: "https://topscale.ai/",
      title: "Topscale",
      date: "2023-08-15",
      tags: ["Web App", "Landing Pages"],
      thumbnail: "/images/work/topscale.png",
      description: t("projects.topscaleai"),
    },
    {
      link: "https://obeobiogas.com",
      title: "Obeo Biogas",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/obeobiogas.png",
      description: t("projects.obeobiogas"),
    },
    {
      link: "https://leapyearlearning.ai/",
      title: "Leap Year Learning",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/lyl.png",
      description: t("projects.leapyearlearning"),
    },
    {
      link: "https://megascale.ai",
      title: "Megascale",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/megascale.webp",
      description: t("projects.megascale"),
    },
    {
      link: "https://book-store-olive.vercel.app",
      title: "Light DPH",
      date: "2023-09-01",
      tags: ["Landing Pages", "Web App"],
      thumbnail: "/images/work/light.png",
      description: t("projects.lightdph"),
    },
    {
      link: "https://www.youtube.com/watch?v=4WxEdc81LhU",
      title: "ALED",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/aled.png",
      description: t("projects.aled"),
    },
    {
      link: "https://cabinetlatif.fr/",
      title: "Cabinet Latif",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/cabinetlatif.png",
      description: t("projects.cabinetlatif"),
    },
    {
      link: "https://samihanine.github.io/tuto/",
      title: "React Tutorials",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/tutorials.png",
      description: t("projects.reacttutorials"),
    },
    {
      link: "https://welcome.senzu.app/fr_fr/",
      title: "Senzu Printer",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/printer.png",
      description: t("projects.senzuprinter"),
    },
  ] as Project[];
}

export async function getTags() {
  let caseStudies = await getProjects();
  let repeatingTags = caseStudies.map((caseStudy) => caseStudy.tags).flat();

  const tagCount = new Map();

  repeatingTags.forEach((tag) => {
    if (tagCount.has(tag)) {
      tagCount.set(tag, tagCount.get(tag) + 1);
    } else {
      tagCount.set(tag, 1);
    }
  });

  const uniqueTags = Array.from(new Set(repeatingTags));

  const tags = uniqueTags.sort((tag1, tag2) => {
    let freq1 = tagCount.get(tag1);
    let freq2 = tagCount.get(tag2);

    return freq2 - freq1;
  });

  return tags;
}
