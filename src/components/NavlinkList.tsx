import { NavLink } from './Navlink';

export function NavLinkList() {
  return (
    <>
      <NavLink path="/" label="INÍCIO" />
      <NavLink path="/about" label="SOBRE" />
      <NavLink path="/contact" label="CONTATO" />
    </>
  );
}
