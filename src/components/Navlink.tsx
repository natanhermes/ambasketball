import Link from 'next/link';

interface NavLinkProps {
  path: string;
  label: string;
  onClick?: () => void;
}

export function NavLink({ path, label, onClick }: NavLinkProps) {
  return (
    <li>
      <Link
        href={path}
        onClick={onClick}
        className={`focus:text-primary text-icons py-4 px-3 inline-block hover:text-primary`}
      >
        {label}
      </Link>
    </li>
  );
}
