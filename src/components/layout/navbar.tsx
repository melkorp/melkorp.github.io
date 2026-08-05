"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "/blog", label: "Блог" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    if (isOpen) {
      window.addEventListener("keydown", onKey);
      // передать фокус первому элементу меню
      setTimeout(() => firstMenuItemRef.current?.focus(), 0);
    }

    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/95 md:backdrop-blur-xl shadow-lg shadow-black/50">
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
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 md:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="h-0.5 w-6 bg-current"></span>
            <span className="h-0.5 w-6 bg-current"></span>
            <span className="h-0.5 w-6 bg-current"></span>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="border-t border-zinc-800 py-6 md:hidden"
            role="menu"
          >
            <nav>
              <ul className="flex flex-col gap-5">
                {links.map((link, idx) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      ref={idx === 0 ? firstMenuItemRef : undefined}
                      className="text-zinc-300 transition hover:text-white"
                      tabIndex={0}
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
