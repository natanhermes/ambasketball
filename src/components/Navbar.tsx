'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLinkList } from './NavlinkList';
import { RedirectButton } from './RedirectButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-transparent w-full">
      <div className="bg-transparent flex items-center font-medium justify-between">
        <div
          id="logo-container"
          className="bg-transparent z-50 md:w-auto w-full flex justify-between"
        >
          <img
            src="/images/ambasketball-logotipo.svg"
            className="md:cursor-pointer h-14"
            alt="AM Basketball"
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
        <RedirectButton path="" text="Fale comigo" />
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
