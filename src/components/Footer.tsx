'use client';
import { BsArrowUp } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <span className="text-primary text-sm">Siga-nos</span>
          <span className="text-primary text-sm">Direitos Autorais</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <a href="https://www.youtube.com" target="_blank">
              <FaYoutube size={12} className="text-icons cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/oficialmetha" target="_blank">
              <FaInstagram size={12} className="text-icons cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookF size={12} className="text-icons cursor-pointer" />
            </a>
          </div>
          <span className="text-icons text-xs">
            © 2023. Todos os direitos reservados.
          </span>
        </div>
      </div>
      <div className="w-full mt-16 flex justify-end">
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
      </div>
    </>
  );
}
