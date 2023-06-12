interface ServicesItemProps {
  label: string;
}

export function ServicesItem({ label }: ServicesItemProps) {
  return (
    <li className={'cursor-pointer text-icons'} tabIndex={0}>
      <button className="focus:text-primary">{label}</button>
    </li>
  );
}
