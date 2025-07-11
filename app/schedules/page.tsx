import ScheduleGrid from "../components/ScheduleGrid";
import teacherData from "../data/teachers.json";

export default function SchedulesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Schedules</h1>
      <p className="text-gray-600 mb-6">
        View the weekly schedule for teachers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teacherData.map((teacher) => (
          <div key={teacher.id} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {teacher.name}
            </h2>
            <ScheduleGrid
              schedule={{
                monday: teacher.schedule.monday ?? [],
                tuesday: teacher.schedule.tuesday ?? [],
                wednesday: teacher.schedule.wednesday ?? [],
                thursday: teacher.schedule.thursday ?? [],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
