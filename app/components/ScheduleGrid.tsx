type ScheduleProps = {
  schedule: { [day: string]: string[] };
};

export default function ScheduleGrid({ schedule }: ScheduleProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekly Schedule</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(schedule).map(([day, times]) => (
          <div
            key={day}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition-shadow"
          >
            <h4 className="font-semibold text-gray-700 capitalize mb-2">
              {day}
            </h4>
            {times.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {times.map((time, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow"
                  >
                    {time}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No classes</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
