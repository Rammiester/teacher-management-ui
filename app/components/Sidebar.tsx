"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Teachers", href: "/teachers" },
    { name: "Schedules", href: "/schedules" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 ${
        isOpen ? "w-56" : "w-16"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-bold text-purple-600">
          {isOpen ? "Menu" : "M"}
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <span className="sr-only">Toggle Menu</span>☰
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 rounded-md ${
              pathname === item.href
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {isOpen ? item.name : item.name.charAt(0)}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
