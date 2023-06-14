'use client';
import { BsArrowUp } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export function Footer() {
  return (
    <div className="w-full pt-32 bg-transparent bg-opacity-50">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <span className="text-primary text-sm">Siga-nos</span>
          <span className="text-primary text-sm">Direitos Autorais</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <a
              href="https://www.instagram.com/ambasketball__"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} className="text-icons cursor-pointer" />
            </a>
          </div>
          <span className="text-icons text-xs">
            © 2023. Todos os direitos reservados.
          </span>
        </div>
      </div>
      <div className="w-full pt-12 flex justify-end">
        <div
          className="p-2 bg-primary cursor-pointer rounded-sm hover:bg-opacity-90"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <BsArrowUp size={24} className="text-[#dedbe3]" />
        </div>
      </div>
      <div className="w-full py-12 flex justify-center">
        <span className="text-icons text-[0.5rem] flex flex-row gap-2 items-center">
          Desenvolvido por{' '}
          <a
            href="https://www.methadigital.com/"
            target="_blank"
            rel="noreferrer"
            className="text-metha"
          >
            <Image
              src={require('../../public/images/metha-digital-logo-retrato.svg')}
              alt=""
              priority
              width={150}
              height={150}
            />
          </a>
        </span>
      </div>
    </div>
  );
}
