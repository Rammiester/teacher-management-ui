interface Teacher {
  name: string;
  email: string;
  phone: string;
  qualifications: string[];
}

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition transform hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
          {initials}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {teacher.name}
          </h2>
          <p className="text-gray-500">{teacher.email}</p>
          <p className="text-gray-500">{teacher.phone}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {teacher.qualifications.map((q) => (
              <span
                key={q}
                className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
