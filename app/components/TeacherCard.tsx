"use client";
import { motion } from "framer-motion";

interface TeacherCardProps {
  teacher: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  };
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  // Extract initials for avatar fallback
  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center space-x-4"
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
        {initials}
      </div>

      {/* Teacher Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
        <p className="text-sm text-gray-500">{teacher.email}</p>
        <p className="text-sm text-gray-500">{teacher.phone}</p>

        {/* Qualifications as pill tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {teacher.qualifications.map((q, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full shadow"
            >
              {q}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
