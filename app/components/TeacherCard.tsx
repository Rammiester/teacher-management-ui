import QualificationsTable from "./QualificationsTable";

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
      <p className="text-gray-500 text-sm">{teacher.email}</p>
      <p className="text-gray-500 text-sm">{teacher.phone}</p>

      <div className="mt-4">
        <QualificationsTable
          qualifications={teacher.qualifications}
          title="Qualifications"
        />
      </div>
    </div>
  );
}
