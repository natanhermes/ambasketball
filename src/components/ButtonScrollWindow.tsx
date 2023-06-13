'use client';
import { BsArrowUp } from 'react-icons/bs';

export function ButtonScroll() {
  return (
    <div
      className="p-2 bg-primary cursor-pointer rounded-sm hover:bg-opacity-90"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <BsArrowUp size={24} className="text-[#DCC8FF]" />
    </div>
  );
}
