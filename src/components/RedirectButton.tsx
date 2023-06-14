import Link from 'next/link';

interface RedirectButtonProps {
  path: string;
  text?: string;
  onClick?: () => void;
  className?: string | undefined;
}

export function RedirectButton({
  path,
  text,
  onClick,
  className,
}: RedirectButtonProps) {
  return (
    <Link
      href={path}
      className={`px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 font-light ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
