interface FlexRowColStackProps {
  children?: React.ReactNode;
}

export function FlexRowColStack({ children }: FlexRowColStackProps) {
  return <div className="flex flex-col md:flex-row w-full">{children}</div>;
}
