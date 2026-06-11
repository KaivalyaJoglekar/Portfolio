import { ProjectsPageContent } from '@/components/ProjectsPageContent';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return <ProjectsPageContent projects={projects} />;
}
