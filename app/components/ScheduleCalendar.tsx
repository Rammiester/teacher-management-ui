export default function ScheduleCalendar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Weekly Schedule
      </h3>
      <div className="grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="flex flex-col gap-1 bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition"
          >
            <h4 className="text-sm font-medium text-gray-700">{day}</h4>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              9:00 - 10:00 AM
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
