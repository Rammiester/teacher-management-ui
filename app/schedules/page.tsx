import ScheduleGrid from "../components/ScheduleGrid";
import teacherData from "../data/teachers.json";

export default function SchedulesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Schedules</h1>
      <p className="text-gray-600 mb-6">
        View the weekly schedule for teachers.
      </p>

      <div className="grid gap-8">
        {teacherData.map((teacher) => (
          <div key={teacher.id} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {teacher.name}
            </h2>
            <ScheduleGrid schedule={teacher.schedule} />
          </div>
        ))}
      </div>
    </div>
  );
}
