'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

type NavItem = { title: string; link: string };

const navItems: NavItem[] = [
  { title: 'Mission', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Support', link: '/support' },
  { title: 'Contact Us', link: '/contact' },
];

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Use the DOM MouseEvent, not React.MouseEvent
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (navRef.current && target && !navRef.current.contains(target)) {
        // TODO: close menus/popovers if added later
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="hidden md:flex">
      <ul className="flex gap-2 text-xl">
        {navItems.map((item) => (
          <li key={item.link} className="relative">
            <Link href={item.link} className="flex items-center px-4 py-2">
              <span className="text-[16px] hover:text-myPurple">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
