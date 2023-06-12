import { NavLink } from './Navlink';

export function NavLinkList() {
  return (
    <>
      <NavLink path="/" label="Início" />
      <NavLink path="/about" label="Sobre mim" />
    </>
  );
}
