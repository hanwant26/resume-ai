type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <h2 className="mb-4 text-2xl font-bold">
      {title}
    </h2>
  );
}