import Link from 'next/link';

interface RedirectButtonProps {
  path: string;
  text?: string;
}

export function RedirectButton({ path, text }: RedirectButtonProps) {
  return (
    <Link
      href={path}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 font-light"
    >
      {text}
    </Link>
  );
}
