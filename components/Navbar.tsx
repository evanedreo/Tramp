'use client'
import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <div onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
        <h1 className='font-bold text-green-50 text-2xl'>Tramp</h1>
      </div>

      {/* Menu icon for smaller devices */}
      <div className='lg:hidden'>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className='inline-block cursor-pointer'
          onClick={toggleMenu}
        />
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-20 right-0 bg-white shadow-md p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mb-3">
              <div onClick={() => window.location.href = link.href} style={{ cursor: 'pointer' }}>
                {link.label}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Regular menu for larger devices */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <div onClick={() => window.location.href = link.href} style={{ cursor: 'pointer' }}>
              {link.label}
            </div>
          </li>
        ))}
      </ul>

      {/* Login button for larger devices */}
      <div className='lg:flexCenter hidden'>
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>
    </nav>
  );
};

export default Navbar;
