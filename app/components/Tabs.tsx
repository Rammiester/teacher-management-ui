"use client";
import { useState } from "react";

const tabs = ["Overview", "Assignments", "Attendance", "Notes"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow"
                : "text-gray-600 hover:text-purple-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="p-4 bg-white rounded-b-lg shadow">
        <p className="text-gray-600">
          This is the <strong>{activeTab}</strong> content area.
        </p>
      </div>
    </div>
  );
}
