import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Paper | Kaivalya Joglekar',
};

export default function ResearchPaperPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black/90">
      <iframe
        src="/IVP_Research_Paper.pdf"
        className="h-full w-full border-none"
        title="Research Paper"
      />
    </div>
  );
}