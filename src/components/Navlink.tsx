import Link from 'next/link';

interface NavLinkProps {
  path: string;
  label: string;
}

export function NavLink({ path, label }: NavLinkProps) {
  return (
    <li>
      <Link
        href={path}
        className={`focus:text-primary text-icons py-4 px-3 inline-block`}
      >
        {label}
      </Link>
    </li>
  );
}
