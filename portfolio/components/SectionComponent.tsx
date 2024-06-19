interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="max-w-[1200px] mx-auto mb-10">
      <h2 className="text-4xl font-bold text-center">{title}</h2>
      <div className="underline"></div>
    </div>
  );
}
