import Header from "./components/Header";
import TeacherCard from "./components/TeacherCard";
import QualificationsTable from "./components/QualificationsTable";
import Tabs from "./components/Tabs";
import ScheduleCalendar from "./components/ScheduleCalendar";
import teacherData from "./data/teachers.json";

export default function DashboardPage() {
  return (
    <div className="flex">
      <main className="flex-1 bg-gray-50 min-h-screen p-6">
        <Header
          title="Teacher Dashboard"
          description="Modernized interface for managing teachers, schedules & qualifications."
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md shadow hover:scale-105 transition">
            + Add Teacher
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Edit Details
          </button>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teacherData.map((teacher) => (
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

        {/* Schedule Calendar */}
        <div className="mt-6">
          <ScheduleCalendar />
        </div>
      </main>
    </div>
  );
}
