import { getI18n } from "@/locale/server";

export const getLinks = async () => {
  const t = await getI18n();
  const links = [
    { label: t("header.home"), href: "/" },
    { label: t("header.work"), href: "/work" },
    { label: t("header.about"), href: "/about" },
    { label: t("header.contact"), href: "/contact" },
  ];

  return links;
};
