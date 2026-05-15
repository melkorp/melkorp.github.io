"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "/blog", label: "Блог" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl shadow-lg shadow-black/50">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-wide">
            Melkorp
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-zinc-800 py-6 md:hidden">
            <nav>
              <ul className="flex flex-col gap-5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-zinc-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
