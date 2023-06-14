import { NavLink } from './Navlink';

interface NavLinkListProps {
  onClickItem?: () => void;
}

export function NavLinkList({ onClickItem }: NavLinkListProps) {
  return (
    <>
      <NavLink path="/" label="INÍCIO" onClick={onClickItem} />
      <NavLink path="/about" label="SOBRE" onClick={onClickItem} />
    </>
  );
}
