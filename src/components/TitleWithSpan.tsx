interface TitleWithSpanProps {
  spanText: string;
  text: string;
}

export function TitleWithSpan({ spanText, text }: TitleWithSpanProps) {
  return (
    <p className="text-xl md:text2xl text-icons">
      <span className="text-primary">{spanText}</span> {text}
    </p>
  );
}
