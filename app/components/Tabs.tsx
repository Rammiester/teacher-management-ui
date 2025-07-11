"use client";
import { useState } from "react";

const tabs = ["Availability", "Students", "Schedule", "Comments"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Availability");

  return (
    <div>
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-md transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-b-xl shadow">
        <p className="text-gray-500 italic">Content for {activeTab}</p>
      </div>
    </div>
  );
}
