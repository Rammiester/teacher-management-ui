interface ScheduleCalendarProps {
  schedule?: {
    [day: string]: string[];
  };
}

export default function ScheduleCalendar({
  schedule = {
    Monday: ["Maths", "Physics"],
    Tuesday: ["English", "Chemistry"],
    Wednesday: ["Biology", "History"],
    Thursday: ["PE", "Geography"],
    Friday: ["Art", "Music"],
  },
}: ScheduleCalendarProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Weekly Schedule
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Object.entries(schedule).map(([day, subjects]) => (
          <div
            key={day}
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
          >
            <h4 className="font-medium text-purple-700 mb-1">{day}</h4>
            <ul className="list-disc list-inside text-gray-600">
              {subjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
