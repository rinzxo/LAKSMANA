"use client";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "What I Do", href: "/services" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white transition-colors duration-300 ${isOpen ? 'bg-black' : 'mix-blend-difference'}`}>
      {/* Logo Placeholder */}
      <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
        RINZ
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-widest font-bold hover:text-red-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="flex items-center space-x-2 border border-white/30 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all group"
        >
          <span className="text-sm uppercase tracking-widest font-bold">Get in Touch</span>
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black h-screen flex flex-col items-center pt-20 space-y-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center space-x-2 border border-white/30 rounded-full px-8 py-4 mt-8"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg uppercase tracking-widest font-bold">Get in Touch</span>
          </Link>
        </div>
      )}
    </header>
  );
}
