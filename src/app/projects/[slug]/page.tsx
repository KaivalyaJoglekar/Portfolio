import { notFound } from 'next/navigation';
import { ProjectDetailPage } from '@/components/ProjectDetailPage';
import { projects } from '@/lib/projects';

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();

  return <ProjectDetailPage project={projects[index]} nextProject={projects[(index + 1) % projects.length]} />;
}
