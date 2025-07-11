"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Teachers", href: "/teachers" },
    { name: "Schedules", href: "/schedules" },
    { name: "Payments", href: "/payments" },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      {!open && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded shadow-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open sidebar"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-gradient-to-b from-purple-600 to-indigo-600 text-white flex flex-col shadow-lg z-40
          transition-transform duration-300
          w-60
          fixed top-0 left-0 h-screen
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex
        `}
      >
        {/* Logo */}
        <div className="p-6 text-2xl font-bold tracking-wide">Teacher UI</div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg mx-3 hover:bg-white hover:text-purple-700 transition ${
                pathname === link.href
                  ? "bg-white text-purple-700 font-medium shadow"
                  : "text-white/80"
              }`}
              onClick={() => setOpen(false)} // Close sidebar on mobile after click
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 text-xs text-white/60">
          © 2025 TeacherUI
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        />
      )}
    </>
  );
}
