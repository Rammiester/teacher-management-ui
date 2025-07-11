"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 m-2 rounded border border-gray-300 text-gray-700"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-64 bg-gray-100 border-r border-gray-200 p-4`}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Menu</h2>
        <nav className="flex flex-col gap-2 text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Dashboard
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Teachers
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Schedules
          </a>
        </nav>
      </aside>
    </>
  );
}
