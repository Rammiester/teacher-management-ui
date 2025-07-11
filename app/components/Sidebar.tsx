"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Teachers", href: "/teachers" },
    { name: "Schedules", href: "/schedules" },
    { name: "Payments", href: "/payments" }, 
  ];

  return (
    <aside className="min-h-screen w-60 bg-gradient-to-b from-purple-600 to-indigo-600 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold tracking-wide">
        Teacher UI
      </div>

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
  );
}
