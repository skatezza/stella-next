import { Projects } from "@/components/Projects";
import { getProjects, getTags } from "@/data/projects";
import { getI18n } from "@/locale/server";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("projects.metaTitle"),
  };
}

export default async function Page() {
  const projects = await getProjects();
  const tags = await getTags();

  return <Projects projects={projects} tags={tags} />;
}
