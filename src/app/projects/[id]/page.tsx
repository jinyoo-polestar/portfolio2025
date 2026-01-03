import ProjectIntro from "./ProjectIntro";
import ProjectOverview from "./ProjectOverview";
import ProjectBuilt from "./ProjectBuilt";
import ProjectInsight from "./ProjectInsight";

import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return;
  }

  return (
    <>
      <ProjectIntro data={project} />
      <ProjectOverview data={project} />
      <ProjectBuilt data={project} />
      <ProjectInsight data={project} />
    </>
  );
}
