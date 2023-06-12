interface ParagraphProps {
  children: React.ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-sm md:text-lg">{children}</p>;
}
