import { AboutHero } from "@/components/AboutHero";
import { getI18n } from "@/locale/server";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("about.metaTitle"),
  };
}

export default async function Page() {
  return (
    <>
      <AboutHero />
    </>
  );
}
