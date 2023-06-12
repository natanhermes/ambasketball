'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLinkList } from './NavlinkList';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black w-full">
      <div className="bg-black flex items-center font-medium justify-between">
        <div
          id="logo-container"
          className="bg-black z-50 md:w-auto w-full flex justify-between"
        >
          <img
            src="/images/ambasketball-logotipo.svg"
            className="md:cursor-pointer h-9"
            alt="Logotipo que possui uma imagem em forma de M e a palavra metha"
          />

          <div
            className="md:hidden flex items-center"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-8 cursor-pointer text-icons md:hidden" />
            ) : (
              <Bars3Icon className="h-8 cursor-pointer text-icons md:hidden" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <NavLinkList />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-black fixed w-full top-0 overflow-y-hidden bottom-0 py-20 pl-4
            duration-500 ${open ? 'left-0' : 'left-[-100%]'}
            `}
        >
          <NavLinkList />
        </ul>
      </div>
    </nav>
  );
}
