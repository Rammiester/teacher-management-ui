import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TeacherCard from "./components/TeacherCard";
import ScheduleGrid from "./components/ScheduleGrid";
import teacherData from "./data/teachers.json";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Header title="Teacher Management UI" />

        {/* Teacher Cards */}
        <section className="grid md:grid-cols-2 gap-6 mt-6">
          {teacherData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </section>

        {/* Schedule Grid */}
        <section className="mt-10">
          <ScheduleGrid schedule={teacherData[0].schedule || {}} />
        </section>
      </div>
    </main>
  );
}
