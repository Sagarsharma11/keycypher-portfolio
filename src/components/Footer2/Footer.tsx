import React from 'react';
import { RiFlashlightFill } from 'react-icons/ri'; // StackBlitz-like lightning icon

const Footer = () => {
  const links = [
    { label: 'Pricing', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ];

  return (
    <footer className="w-full py-4 px-6 bg-gray-950 text-sm border-t border-gray-800">
      <div className="flex justify-end items-center flex-wrap gap-x-4 gap-y-2 text-gray-400">
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <a href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
            {index === 3 && <span className="text-gray-600">•</span>}
          </React.Fragment>
        ))}

        {/* Brand / Logo */}
        <span className="flex items-center text-white font-semibold space-x-1">
          <RiFlashlightFill className="text-yellow-400" size={16} />
          <span>SecureScan</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
