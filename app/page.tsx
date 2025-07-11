"use client";
import Header from "./components/Header";
import TeacherCard from "./components/TeacherCard";
import QualificationsTable from "./components/QualificationsTable";
import Tabs from "./components/Tabs";
import ScheduleCalendar from "./components/ScheduleCalendar";
import AddTeacherModal from "./components/AddTeacherModal";
import teacherData from "./data/teachers.json";
import { useState } from "react";

type Teacher = {
  id: number;
  name: string;
  email: string;
  phone: string;
  qualifications: string[];
  schedule: {
    [key: string]: string[];
  };
};

export default function DashboardPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(teacherData); // Teacher list
  const [showModal, setShowModal] = useState(false); // Modal state

  // Add new teacher handler
  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers((prev) => [...prev, newTeacher]);
    setShowModal(false);
  };
  

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main content */}
      <main className="flex-1 bg-gray-50 min-h-screen p-4 sm:p-6">
        <Header
          title="Teacher Dashboard"
          description="Modernized interface for managing teachers, schedules & qualifications."
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md shadow hover:scale-105 transition"
          >
            + Add Teacher
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Edit Details
          </button>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.email} teacher={teacher} />
          ))}
        </div>

        {/* Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <QualificationsTable title="Private Qualifications" />
          <QualificationsTable title="Group Qualifications" />
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <Tabs />
        </div>

        {/* Schedule */}
        <div className="mt-6">
          <ScheduleCalendar />
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <AddTeacherModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddTeacher}
        />
      )}
    </div>
  );
}
